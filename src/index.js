import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('FETCH_DETAILS', fetchDetails)
    yield takeEvery('EDIT_MOVIE', editMovie)
}
// GET
function* fetchMovies() {
    try {
        const response = yield axios.get('/list');
        yield put ({ type: 'SET_MOVIES', payload: response.data});
    } catch ( error ) {
        console.log('error getting movie', error);
        alert('could not get movie name at this time. try again later.')
    }
}

// SECOND GET
function* fetchDetails(action) {
    try {
        const response = yield axios.get(`/list/${action.payload}`);
        yield put ({ type: 'SET_DETAILS', payload: response.data});
    } catch ( error ) {
        console.log('error getting details', error);
        alert('could not get movie details at this time. try again')
    }
}

function* editMovie(action) {
    try {
        yield axios.put(`/list/update/${action.payload.id}`, action.payload);
        yield put({ type: 'FETCH_MOVIES'})
    } catch (error) {
        console.log('Error updating movie list', error);
        alert('could not update movie list at this time. try again later');
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const details = (state = {}, action) => {
    switch (action.type) {
        case 'SET_DETAILS':
            return action.payload;
            default:
                return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        details,
        genres,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();

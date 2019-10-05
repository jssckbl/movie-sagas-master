// display all of the movies in the database
import React, { Component } from 'react';
import Edit from '../Edit/Edit';
import { connect } from 'react-redux';

import MovieList from '../MovieList/MovieList';



class Home extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIE'});
    }

    // seeMovieList = (id) => {
    //     this.props.history.push('/' + id)
    // }



    // seePlant = (id) => {
    //     this.props.history.push('/' + id)
    // }
    render() {
        return (
            <div>
                {this.props.reduxStore.movies.map(item => (
                    <MovieList item={item} />
                ))}
                {/* <h2>This is the movie list!</h2>
                <Edit />
                <Home seeMovieList={this.seeMovieList} /> */}
            </div>
        )
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(Home);
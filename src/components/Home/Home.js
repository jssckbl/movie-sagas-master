// display all of the movies in the database
import React, { Component } from 'react';
import Edit from '../Edit/Edit';
import { connect } from 'react-redux';
import Details from '../Details/Details';

import MovieList from '../MovieList/MovieList';



class Home extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIE' });
    }

    onChange = (item) => {
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: item.id });
        this.props.history.push('/details')
    }
    // seeMovieList = (id) => {
    //     this.props.history.push('/' + id)
    // }



    // seePlant = (id) => {
    //     this.props.history.push('/' + id)
    // }
    render() {
        return (
            <>
                <div className="App">
                    <div>
                        <h1>Movie List</h1>
                        {this.props.reduxState.movieReducer.map(item => {
                            return (
                                <div className="Container" key={item.id}>
                                    <img onClick={(event) => this.onChange(item)}
                                        src={item.poster} alt='' />
                                    <p className="Title">{item.title}</p>
                                    <p className="Description">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>
        );
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);
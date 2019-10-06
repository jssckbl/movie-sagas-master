// display all of the movies in the database
import React, { Component } from 'react';
import Edit from '../Edit/Edit';
import { connect } from 'react-redux';
import Details from '../Details/Details';

import MovieList from '../MovieList/MovieList';



class Home extends Component {
    componentDidMount() {
        this.props.dispatch({type: 'FETCH_MOVIE'});
    }

    onChange = (id) => {
        // this.props.dispatch( { type: 'FETCH_DETAILS', payload: item.id});
        this.props.history.push('/details' + id)
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
                {/* <div className="App"> */}
                <div>
                    <h1>Movie List</h1>
                    <MovieList onChange={this.onChange} />
                </div>
            </>
        );
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
})

export default connect(putReduxStateOnProps)(Home);



// {
//     this.props.reduxState.movies.map(item => {
//         return (
//             <div className="Container" key={item.id}></div>
//             <img onClick={(event) =>
//                 this.onChange(item)} src={item.poster} alt='' />
//             <p className="Title">{item.title}</p>
//             <p className="Description">{item.description}</p>
//                     )
                    
//                      )
// } 
//                      </div >
//     <h2>This is the movie list!</h2>
//     <Edit />
//     <Home seeMovieList={this.seeMovieList} /> 
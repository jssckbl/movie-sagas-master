import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// show all details, including genres, for selected movie

// backToList button that goes to HomePage
// edit button, that brings user to EditPage


class Details extends Component {
    // componentDidMount = () => {
    //     this.props.dispatch({ type: 'GET_PLANT' })
    // }

    backToListButton = ( event ) => {
        this.props.history.push('/');
    }

    editButton = ( event ) => {
        this.props.history.push('/edit');
    }

    render() {

        let details = this.props.reduxState.details;
        return (
            <>
            <div className="App">
            <h1>Movie Details</h1>
            <button onClick={this.backToListButton}type="submit">Back To List</button>
            <button onClick={this.editButton}type="edit"></button>
            </div>
                {/* {this.props.reduxState.movieDetails.map(plant => { */}
                {/* if (plant.id == this.props.match.params.id) { */}
            <div>
            <p className = 'movieTitle'>>{details.name}</p>
            <p className = 'movieInfo'>{details.description}</p>
            <p>{details.name}</p>
            </div>            
            </>  
            )
        }
        }
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Details);
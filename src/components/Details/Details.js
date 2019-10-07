import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Edit from '../Edit/Edit';


class Details extends Component {
    // componentDidMount = () => {
    //     this.props.dispatch({ type: 'GET_DETAILS' })
    // }

// backToList button that goes to HomePage
    backToListButton = ( event ) => {
        this.props.history.push('/')
    }

// edit button, that brings user to EditPage
    editButton = ( event ) => {
        this.props.history.push('/Edit')
    }

    render() {

        let details = this.props.storeInstance.details;

        return (
            <>
            {/* <div className="App"> */}
            <h1>Movie Details</h1>
            <button onClick={this.backToListButton}type="submit">Back To List</button>
            <button onClick={this.editButton}type="submit">Edit</button>
            {/* </div> */}
                {/* {this.props.reduxStore.movieDetails.map(plant => { */}
                {/* if (plant.id == this.props.match.params.id) { */}
            <div>

{/* show all details, including genres, for selected movie */}

                <p>Details Page</p>
                <p>{details.title}</p>
                <p>{details.description}</p>
                <p>{details.name}</p>
            {/* <p className = "movieTitle">{details.title}</p>
            <p className = "movieDescription">{details.description}</p>
            <p>{details.name}</p> */}
            </div>            
            </>  
            );
        }
        }
const storeInstanceOnProps = (storeInstance) => ({
    storeInstance,
});
export default connect(storeInstanceOnProps)(Details);
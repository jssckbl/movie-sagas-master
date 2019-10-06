
// input field (for changing movie title) for selected movie
// text area for changing movie description
// cancel button that brings user to the DetailsPage
// save button that updates title and description in DB
// bring the user to the Details Page

import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {
    state = {
        id: this.props.reduxStore.details.id,
        name: '',
        description: '', 
    }

    // state = {
    //     updateMovie: {
    //         name: '',
    //         description: '',

    //     }
    // }

    cancelButton = (event) => {
        // event.preventDefault();
        // this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.updateMovie})
        this.props.history.push('/Details')
    }

    // saveButton = (event) => {
    //     this.props.history.push('/')
    //     this.props.dispatch( { type: 'EDIT_LIST', payload: this.state})
    // }

    handleNameChange = (propertyName, event) => {
        console.log('event happened')
        this.setState({
            ...this.state,
            [propertyName]: event.target.value,

            // updateMovie: {
            //     ...this.state.updateMovie,
            //     [input]: event.target.value,
            // }
        });
    }

    addNewMovie = () => {
        // event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_DETAILS', payload: this.state })
        this.props.history.push('/details')
        // this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.updateMovie })
        // this.setState({
        //     updateMovie: {
        //         name: '',
        //         description: '',

        //     }
        // });
    }

    render() {
        return (
            // <div className = "App">
            <>
                <h1>Edit Movie Title and Description</h1>
                <input type="text" value={this.state.name}
                onChange= { (event) => this.handleNameChange('name', event)}
                placeholder="Movie Title"></input>

                <input type="text" value={this.state.description}
                onChange= { (event) => this.handleNameChange('description', event)}
                placeholder="Description"></input>

                <button onClick={this.cancelButton}type="submit">Cancel</button>
                <button onClick={this.saveButton}type="submit">Save</button>
            </>
            // </div>
        );
    }
}

const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore,
});


export default connect(putReduxStoreOnProps)(Edit);



{/* <h3>This is the form</h3>
    <form onSubmit={this.addNewMovie}>
        <input type='text' placeholder="Movie Title" value={this.state.updateMovie.name} onChange={(event) => this.handleNameChange(event, 'name')} />
        <textarea type='text' placeholder="Movie Description" value={this.state.updateMovie.description} onChange={(event) => this.handleNameChange(event, 'description')} />

        <input type='submit' value='Add Updated Movie' />
    </form> */}
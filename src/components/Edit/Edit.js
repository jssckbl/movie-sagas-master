import React, { Component } from 'react';
import { connect } from 'react-redux';


class Edit extends Component {
    state = {
        id: this.props.storeInstance.details.id,
        name: '',
        description: '', 
    }

// cancel button that brings user to Details
    cancelButton = (event) => {
        // event.preventDefault();
        // this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.updateMovie})
        this.props.history.push('/Details')
    }

// save button that updates title and description in database
    saveButton = (event) => {
        this.props.history.push('/Details')
        this.props.dispatch( { type: 'EDIT_MOVIE', payload: this.state})
    }

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

{/* input field for changing movie title for selected movie */}
                <input type="text" value={this.state.name}
                onChange= { (event) => this.handleNameChange('name', event)}
                placeholder="Movie Title"></input>

{/* text area for changing movie description */}
                <textarea type="text" value={this.state.description}
                onChange= { (event) => this.handleNameChange('description', event)}
                placeholder="Description"></textarea>

                <button onClick={this.cancelButton}type="submit">Cancel</button>
                <button onClick={this.saveButton}type="submit">Save</button>
            </>
            // </div>
        );
    }
}

const storeInstanceOnProps = (storeInstance) => ({
    storeInstance,
});


export default connect(storeInstanceOnProps)(Edit);
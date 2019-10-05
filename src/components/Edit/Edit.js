
// input field (for changing movie title) for selected movie
// text area for changing movie description
// cancel button that brings user to the DetailsPage
// save button that updates title and description in DB
// bring the user to the Details Page

import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class Edit extends Component {
    state = {
        updateMovie: {
            name: '',
            description: '',

        }
    }

    cancelButton = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.updateMovie})
        // this.props.history.push('/details')
    }

    saveButton = (event) => {
        // this.props.history.push('/details')
    }

    handleNameChange = (event, input) => {
        console.log('event happended')
        this.setState({
            updateMovie: {
                ...this.state.updateMovie,
                [input]: event.target.value,
            }
        });
    }

    addNewMovie = event => {
        event.preventDefault();
        this.props.dispatch({ type: 'UPDATE_MOVIE', payload: this.state.updateMovie })
        this.setState({
            updateMovie: {
                name: '',
                description: '',

            }
        });
    }

    render() {
        return (
            <div>
                <h3>This is the form</h3>
                <form onSubmit={this.addNewMovie}>
                    <input type='text' placeholder="Movie Title" value={this.state.updateMovie.name} onChange={(event) => this.handleNameChange(event, 'name')} />
                    <input type='text' placeholder="Movie Description" value={this.state.updateMovie.description} onChange={(event) => this.handleNameChange(event, 'description')} />

                    <input type='submit' value='Add Updated Movie' />
                </form>
            </div>
        );
    }
}


export default connect(mapStateToProps)(Edit);

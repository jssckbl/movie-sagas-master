import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

class MovieList extends Component {



    render () {
        return (
            <Router>
                {/* <h3>This is the plant list</h3>
                {this.props.reduxState.plantList.map((plant) =>
                    <li key={plant.id}>{plant.name}
                        <button onClick={() => this.props.seePlant(plant.id)}>info</button>
                        <button onClick={() => this.deletePlant(plant.id)}>delete</button></li>
                )} */}
            </Router>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MovieList);
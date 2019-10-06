// display all of the movies in the database
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Details from '../Details/Details';
// import Edit from '../Edit/Edit';


class List extends Component {
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_MOVIES' });
    }

    onChange = (item) => {
        console.log('find details', item.id);
        this.props.dispatch({ type: 'FETCH_DETAILS', payload: item.id });
        this.props.history.push('/details')
    }

    render() {
        return (
            <>
                {/* <div className="App">
                    <div> */}
                        <h1>Movie List</h1>
                        {this.props.reduxStore.movies.map(item => {
                            return (
                                <div className="Container" key={item.id}>
                                    <img onClick={(event) => this.onChange(item)} src={item.poster} alt='' />
                                    <p className="Title">{item.title}</p>
                                    <p className="Description">{item.description}</p>
                                </div>
                            )
                        })}
                    {/* </div>
                </div> */}
            </>
        );
    }
}


const putReduxStoreOnProps = (reduxStore) => ({
    reduxStore
})

export default connect(putReduxStoreOnProps)(List);
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';


// class MovieList extends Component {
//     componentDidMount() {
//         // this.props.dispatch({ type:'FETCH_MOVIE'});
//         this.getMovie();
//     }

//     getMovie = () => {
//         this.props.dispatch({ type: 'GET_MOVIE' })
//     }

//     // deletePlant = (id) => {
//     //     this.props.dispatch({ type: 'DELETE_PLANT', payload: id })
//     // }



//     render() {
//         return (
//             <Router>
//                 <h3>This is the movie list</h3>
//                 {this.props.reduxState.movieReducer.map((item) =>
                
//                     <li key={item.id}>{item.name}
//                         <button onClick={() => this.props.seeMovie(item.id)}>info</button>
//                         {/* <button onClick={() => this.deletePlant(plant.id)}>delete</button> */}
//                     </li>
                
//                 )}
//             </Router>
//         );
//     }
// }

// const mapStateToProps = reduxState => ({
//     reduxState,
// });

// export default connect(mapStateToProps)(MovieList);
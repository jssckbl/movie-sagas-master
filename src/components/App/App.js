import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

// Routes
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

// import MovieList from '../MovieList';
// import MovieItem from '../MovieItem';

// const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <h1>Welcome to your movie list!</h1>
//     </header>
//     <Router>
//       <Route exact path='/' component={Home} />
//       <Route path='/details/:id' component={Details} />
//       <Route path='/edit/:id' component={Edit} />
//     </Router>
//   </div>
// );


class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path='/' component={Home} />
          <Route path='/details/:id' component={Details} />
          <Route path='/edit/:id' component={Edit} />

          {/* <Route path='/movieList' component={MovieList} />
          <Route path='/movieItem' component={MovieItem} /> */}
        </Router>

      </div>
    );
  }
}

export default App;

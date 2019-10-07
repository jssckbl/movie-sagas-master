import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

// Routes
import List from '../List/List';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (

      <div className="App">
        <Router>

          <header><h1>Rad Movies and Other Movies</h1></header>

          <Route path='/' exact component={List} />
          <Route path='/Details' component={Details} />
          <Route path='/Edit' component={Edit} />

        </Router>

      </div>
    );
  }
}
export default App;

// export default connect()(App);

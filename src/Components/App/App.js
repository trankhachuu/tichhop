import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from '../AppRouter/AppRouter';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <AppRouter></AppRouter>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Photo from './Photo';
import Nav from './Nav'
import Search from './Search';
import {
  BrowserRouter,
  Route,
  Switch 
} from 'react-router-dom';


class App extends Component { 
  render() {
    return (
      <div className="container">
        <Search />
        <Nav />
        <h2>Results</h2>
        <Photo />
      </div>
    );
  }
}

export default App;
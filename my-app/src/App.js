// main container component.

// import all files 
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import Search from './components/Search';
import Nav from './components/Nav';
import NoResults from './components/NotFound';
import axios from 'axios';
import apiKey from './config';
import ImageList from './components/ImageList';
import Home from './components/Header';
import loading from './loading.svg';


export default class App extends Component {
  constructor() {
    super();          /* calls the constructor of the parent App and access functions on this object's parent class. */
    this.state = {
      images: [],
      loading: true
    }
  }

  // to performSearch axios makes HTTP requests to fetch data 
  performSearch = (query = "macaroons") => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=&format=json&nojsoncallback=1`)
      .then(response => {
        this.setState({
          images: response.data.photos.photo,
          loading: false  /* doesnt display if images are fetched */
        })
      })
      .catch(error => {
        console.log("Error Fetching Data", error)
        this.setState({
          loading: false /* doesnt display if there is an error */
        })
      })
  }

  // is invoked immediately after a performSearch is mounted
  componentDidMount() {
    this.performSearch()
  }

  // manages the div container. 
  render() {
    return (

      <div className="container">
        <BrowserRouter> {/* this is the parent component that is used to store all of the <Route> components. */}

          <Home />                                      {/* renders header */}
          <Search onSearch={this.performSearch} />      {/* renders Search component */}
          <Nav performSearch={this.performSearch} />    {/* renders nav links */}

          {/* https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md*/}
          {/* Switch Renders the first child <Route> that matches the location. */}
          <Switch>
            <Route exact path="/" />
            <Route path="/:name" />
            <Route path="/ImageList/:type" component={ImageList} />
            <Route path={`match.search/:id`} component={Search} />
            <Route exact path="/search" component={Search} />
            <NoResults />                               {/* No Results picture gets rendered */}
          </Switch>

        </BrowserRouter>

        <div className="photo-container">
        {/* Conditional Operator */}
          {
            (this.state.loading)                         /* condition */
              ? <img src={loading} alt="Loading..." />   /* loading hearts from learning.svg */

              : <ImageList data={this.state.images} />   /* renders ImageList */
          }
        </div>
      </div>
    )
  }
}



import React, { Component } from 'react';
import axios from 'axios';
import apiKey from '../config';
import Image from './Image';
import NoResults from './NotFound';

export default class Gallery extends Component {
    state = {
        images: [],
        loading: false,
    };
    
    // to performSearch axios makes HTTP requests to fetch data 
    performSearch = (query = "macaroons") => {
        this.setState({ loading: true });
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&page=&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({
                    images: response.data.photos.photo,
                    loading: false
                })
            })
            .catch(error => {
                console.log("Error Fetching Data", error)
            })
    }

    // is invoked immediately after a performSearch is mounted
    componentDidMount() {
        this.performSearch(this.props.match.params.name);
    }      
    
    /* Route params are parts of the URL that will change based on the object we want to display.  */
    /* The match object contains information about how a route is matching the URL */

    
    componentDidUpdate(prevProps){ /* is invoked immediately after updating occurs. */
        if (this.props.location.key !== prevProps.location.key) {
            this.performSearch(this.props.match.params.name);
        }
    }

    render(){
        return (
            <div className="photo-container">
                {/* layout for the photo container. Accesses all objects needed for each image */}
                <ul>
                    {                    
                        (this.state.images.length > 0) /* condition */
                        ? this.state.images.map(image => /* if conditon is true map through image and display it */
                            <Image
                                url={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
                                alt={image.title}
                                key={image.id}
                            />
                        )
                        : <NoResults /> /* if false render NoResults */
                    }
                </ul>
            </div>
        )
    }
}   

import React, { Component } from 'react';

class Photo extends Component {
    render () {
        return (
            <div className="photo-container">
                <img src="https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg" alt="" />
            </div>
        )
    }
}

export default Photo;


// state = {
//     loading: true,
//     pictures: []
//   };

//   async componentDidMount() {
//     const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cupcakes&extras=url_o&per_page=24&page=1&format=json&nojsoncallback=1`;
//     const response = await fetch(url);
//     const data = await response.json();
//     this.setState({ pictures: data.results, loading: false})
//   }

//   if (this.state.loading) {
//     return <div>loading...</div>
//   }

//   if (!this.state.pictures.length) {
//     return <div>no results</div>
//   }
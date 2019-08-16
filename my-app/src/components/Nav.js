import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="main-nav">
                <ul>
                    <li><a href='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=edb40053c23c1abd33772c68909f9e55&tags=cupcakes&per_page=24&format=json&nojsoncallback=1'>Cupcakes</a></li>
                    <li><a href='#'>Dogs</a></li>
                    <li><a href='#'>Computers</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;

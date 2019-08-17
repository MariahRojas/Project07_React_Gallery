import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    return (
        <ul className="main-nav">
            <nav>
                <ul>
                <li><NavLink exact to="/" onClick={() => {
                    props.performSearch()
                }}>Home</NavLink></li>

                <li><NavLink to="/cupcakes" onClick={() => {
                    props.performSearch("cupcakes")
                }}>Cupcakes</NavLink></li>

                <li><NavLink to="/macaroons" onClick={() => {
                    props.performSearch("macaroons")
                }} >Macaroons</NavLink></li>
                
                <li><NavLink to="/icecream" onClick={() => {
                    props.performSearch("icecream")
                }}>Icecream</NavLink></li>
                </ul>
            </nav>
        </ul>    
    )
}
        
export default Nav
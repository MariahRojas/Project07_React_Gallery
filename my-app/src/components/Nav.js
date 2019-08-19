import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props) => {
    return (
        <ul className="main-nav">
            <nav>
                <ul>
                <li><NavLink exact to="/macaroons" onClick={() => {
                    props.performSearch()
                }}>Macaroons</NavLink></li>

                <li><NavLink to="/cupcakes" onClick={() => {
                    props.performSearch("cupcakes")
                }}>Cupcakes</NavLink></li>

                <li><NavLink to="/latte" onClick={() => {
                    props.performSearch("latte")
                }} >Latte</NavLink></li>
                
                <li><NavLink to="/espresso" onClick={() => {
                    props.performSearch("espresso")
                }}>Espresso</NavLink></li>
                </ul>
            </nav>
        </ul>    
    )
}
        
export default Nav
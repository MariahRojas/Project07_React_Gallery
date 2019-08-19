import React from 'react'

const Image = (props) => (
    /* inserts image, Image will be imported to ImageList*/
        <li>
            <img src={props.url} alt={props.alt}/>
        </li>
    )

export default Image
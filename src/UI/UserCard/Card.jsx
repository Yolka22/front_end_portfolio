import React from 'react'
import Y from "../../images/svg/Y.svg"
import "./Card.css"
const Card = ()=>{
    return(
        <div className='card'>
            <img src={Y} alt=' '/>
            <p className='user-name'>Yehor</p>
            <p className='user-description'>Web Developer</p>
        </div>
    )
}

export default Card

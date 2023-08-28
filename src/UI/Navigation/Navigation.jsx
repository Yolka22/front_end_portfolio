import React from 'react'
import Card from '../UserCard/Card'
import{Link} from "react-router-dom"
import "./Navigation.css"
const Navigation = ()=>{
    return(
        <nav>
            <Card></Card>
            <div className='nav-item'><Link to="/">About</Link></div>
            <div className='nav-item'><Link to="/Skils">My Skils</Link></div>
            <div className='nav-item'><Link to="/Contact">Contact</Link></div>
        </nav>
    )
}

export default Navigation
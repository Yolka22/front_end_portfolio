import React from 'react'
import "../PageStyle/Page.css"
import "./HomePage.css"
import Y from "../../../images/svg/Y.svg"
const HomePage = () =>{
    return(
        <div className='page home'>
            <p>Hi,</p>
            <p>I'm <img src={Y} alt=""></img><span>ehor,</span></p>
            <p>Web developer</p>
        </div>
    )
}
export default HomePage
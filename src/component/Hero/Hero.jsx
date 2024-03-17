import React from 'react'
import './Hero.css';

const Hero = ({img, btn, desc}) => {
return (
    <div className="hero">
        <img src={img} alt="" />
    <div className="info">
        <button> {btn}</button> 
        <p> {desc} </p>
        </div>
        


    
    </div>
)
}

export default Hero

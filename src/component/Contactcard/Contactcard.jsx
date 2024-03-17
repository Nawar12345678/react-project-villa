import React from 'react'
import './Contactcard.css'

const Contactcard = ({imgcc, title, desc}) => {
return (
    <div className="contactcard">
        <img src={imgcc}  alt="" />
        <h6> {title} </h6>
        <span> {desc}</span>

    </div>
)
}

export default Contactcard
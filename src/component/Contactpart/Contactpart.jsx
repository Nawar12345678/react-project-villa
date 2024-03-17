import React from 'react';
import './Contactpart.css';


const Contactpart = ({imgc, title, desc}) => {

return (
    <div className="contact-part">
        <img src={imgc} alt="" />
        <div className="contact-info">
        <h6> {title} </h6>
        <h2> {desc}</h2>
    </div>
    </div>
)
}

export default Contactpart

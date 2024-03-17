import React from 'react';
import Smallcard from '../Smallcard/Smallcard';
import './Video.css';


const Video = ({img1 , title, desc, img2} ) => {
return (
    <>
    <div className="video">
        <img src={img1} alt="" />
        <div className="video-info">
        <h6> {title} </h6>
        <h2> {desc}</h2>
        <div className="imge">
        <img src={img2} alt="" />
    
        </div>
        </div>
    </div>
    <div className="videocard">
    <Smallcard />
    </div>
    </>

)
}

export default Video
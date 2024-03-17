import React from 'react';
import './Smallcard.css';

const Smallcard = () => {
    return (
        <div className="smallcard-container">
            <div className="smallcard">
                <span className="number">34</span>
                <span className="text">Buldings Finished Now</span>
                <span className="shape"></span>

            </div>
            <div className="smallcard">
                <span className="number">12</span>
                <span className="text">Years Experience</span>
                <span className="shape"></span>

            </div>
            <div className="smallcard">
                <span className="number">24</span>
                <span className="text">Awwards Won 2023</span>
                <span className="shape"></span>
            </div>
        </div>
    );
}

export default Smallcard;

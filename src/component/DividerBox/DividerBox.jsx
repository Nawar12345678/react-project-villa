import React from 'react';
import './DividerBox.css';


const DividerBox = ({ sections }) => {
    return (
        <div className="divider-box">
            {sections.map((section, index) => (
                <div key={index} className="section">
                    <span className="section-text">{section.text}</span>
                    <span className="section-number">{section.number}</span>
                </div>
            ))}
        </div>
    );
}

export default DividerBox;

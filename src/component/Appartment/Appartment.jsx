import React from 'react';
import DividerBox from '../DividerBox/DividerBox';
import imgappart from 'E:/React/villa/src/assets/deal-01.jpg';
import './Appartment.css';

const Appartment = () => {
    const sections = [
        { text: "Total Flat Space", number: "185 m2" },
        { text: "Floor number", number: "26th" },
        { text: " Number of rooms ", number: "4" },
        { text: " Parking Available ", number: "Yes" },
        { text: " Payment Process ", number: "Bank" },
        

    ];

    return (
        <div className="appartment">
            <div className="info-appart">
                <DividerBox sections={sections} />
                <img src={imgappart} alt="" />
                <div className="desc-part">
                    <h3>Extra Info About Property</h3>
                    <p>Lorem ipsum dolor sit amet,In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                </div>

            </div>
                <button> Schedule a visit </button>

        </div>
    );
}

export default Appartment;

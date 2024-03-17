import React from 'react';
import DividerBox from '../DividerBox/DividerBox';
import imgappart3 from 'E:/React/villa/src/assets/deal-03.jpg';
import './Penthouse.css';

const Penthouse = () => {
    const sections = [
        { text: "Total Flat Space", number: "320 m2" },
        { text: "Floor number", number: "34th" },
        { text: " Number of rooms ", number: "6" },
        { text: " Parking Available ", number: "Yes" },
        { text: " Payment Process ", number: "Bank" },
        

    ];

    return (
        <div className="appartment">
            <div className="info-appart">
                <DividerBox sections={sections} />
                <img src={imgappart3} alt="" />
                <div className="desc-part">
                    <h3>Extra Info About Penthouse</h3>
                    <p>Lorem ipsum dolor sit amet,In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                </div>

            </div>
                <button> Schedule a visit </button>

        </div>
    );
}

export default Penthouse;

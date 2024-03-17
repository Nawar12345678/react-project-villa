import React from 'react';
import DividerBox from '../DividerBox/DividerBox';
import imgappart2 from 'E:/React/villa/src/assets/deal-02.jpg';
import './VillaHouse.css';

const VillaHouse = () => {
    const sections = [
        { text: "Total Flat Space", number: "250 m2" },
        { text: "Floor number", number: "26th" },
        { text: " Number of rooms ", number: "5" },
        { text: " Parking Available ", number: "Yes" },
        { text: " Payment Process ", number: "Bank" },
        

    ];

    return (
        <div className="appartment">
            <div className="info-appart">
                <DividerBox sections={sections} />
                <img src={imgappart2} alt="" />
                <div className="desc-part">
                    <h3>Detail Info About Villa</h3>
                    <p>Lorem ipsum dolor sit amet,In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
                </div>

            </div>
                <button> Schedule a visit </button>

        </div>
    );
}

export default VillaHouse;

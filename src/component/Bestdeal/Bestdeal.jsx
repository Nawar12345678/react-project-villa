import React, { useState } from 'react';
import Appartment from '../Appartment/Appartment';
import VillaHouse from '../VillaHouse/VillaHouse';
import Penthouse from '../Penthouse/Penthouse';
import './Bestdeal.css';

const Bestdeal = ({ title, desc }) => {
    const [activeButton, setActiveButton] = useState('Appartment');

    const handleButtonClick = (section) => {
        setActiveButton(section);
    };

    return (
        <div className="bestdeal">
            <div className="best">
                <h6> {title} </h6>
                <h2> {desc}</h2>
                <div className="but">
                    <ul className="nav-buttons">
                        <li>
                        <button className={`nav-link ${activeButton === 'Appartment' ? 'active' : ''}`} onClick={() => handleButtonClick('Appartment')}>Appartment</button>
                        </li>
                        <li>
                            <button className={`nav-link ${activeButton === 'VillaHouse' ? 'active' : ''}`} onClick={() => handleButtonClick('VillaHouse')}>VillaHouse</button>
                        </li>
                        <li>
                            <button className={`nav-link ${activeButton === 'Penthouse' ? 'active' : ''}`} onClick={() => handleButtonClick('Penthouse')}>Penthouse</button>
                        </li>
                    </ul>
                </div>

                {activeButton === 'Appartment' && <Appartment />}
                {activeButton === 'VillaHouse' && <VillaHouse />}
                {activeButton === 'Penthouse' && <Penthouse />}
            </div>
        </div>
    );
}

export default Bestdeal;

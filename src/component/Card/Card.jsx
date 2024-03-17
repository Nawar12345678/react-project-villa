import React from 'react';
import icon1 from 'E:/React/villa/src/assets/info-icon-01.png';
import icon2 from 'E:/React/villa/src/assets/info-icon-02.png';
import icon3 from 'E:/React/villa/src/assets/info-icon-03.png';
import icon4 from 'E:/React/villa/src/assets/info-icon-04.png';
import './Card.css';

const Card = () => {
    return (
        <div className="col-lg-3">
            <div className="info-table">
                <ul>
                    <li>
                        <img src={icon1} alt="" />
                        <div>
                            <h4>250 m2</h4>
                            <span>Total Flat Space</span>
                        </div>
                    </li>
                    <hr className="section-divider" />
                    <li>
                        <img src={icon2} alt="" />
                        <div>
                            <h4>Contract</h4>
                            <span>Contract Ready</span>
                        </div>
                    </li>
                    <hr className="section-divider" />
                    <li>
                        <img src={icon3} alt="" />
                        <div>
                            <h4>Payment</h4>
                            <span>Payment </span>
                            <h5>Process</h5>
                        </div>
                    </li>
                    <hr className="section-divider" />
                    <li>
                        <img src={icon4} alt="" />
                        <div>
                            <h4>Safety</h4>
                            <span>24/7 Under </span>
                            <h5> Control</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Card;

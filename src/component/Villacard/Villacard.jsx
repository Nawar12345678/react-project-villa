import React from 'react';
import './Villacard.css';

const Villacard = ({img, villaname, price, address, Bedrooms, Bathrooms, Area, Floor, parking, btn}) => {
    return (
        <div className="contain">
            <div className="villacard">
                <div className="image-container">
                    <img src={img} alt="" />
                    <span className="villaname">{villaname}</span>
                </div>
                <div className="details">
                    <h6>{price}</h6>
                    <h4>{address}</h4>
                    <div className="property-details">
                        <div>
                            <span>Bedrooms:</span>
                            <span>{Bedrooms}</span>
                        </div>
                        <div>
                            <span>Bathrooms:</span>
                            <span>{Bathrooms}</span>
                        </div>
                        <div>
                            <span>Area:</span>
                            <span>{Area}</span>
                        </div>
                        <div>
                            <span>Floor:</span>
                            <span>{Floor}</span>
                        </div>
                        <div>
                            <span>Parking:</span>
                            <span>{parking}</span>
                        </div>
                    </div>
                    <hr className="divider" />
                    <button>{btn}</button>
                </div>
            </div>
        </div>
    );
}

export default Villacard;

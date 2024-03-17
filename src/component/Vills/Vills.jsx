import React from 'react';
import Villacard from '../Villacard/Villacard';
import imgv1 from 'E:/React/villa/src/assets/property-01.jpg';
import imgv2 from 'E:/React/villa/src/assets/property-02.jpg';
import imgv3 from 'E:/React/villa/src/assets/property-03.jpg';
import imgv4 from 'E:/React/villa/src/assets/property-04.jpg';
import imgv5 from 'E:/React/villa/src/assets/property-05.jpg';
import imgv6 from 'E:/React/villa/src/assets/property-06.jpg';
import './Vills.css';

const Vills = () => {
    return (
        <div className="vills">
            <div className="vills-grid">
                <Villacard  
                    img={imgv1}
                    villaname="Luxury Villa"
                    price="$2.264.000"
                    address="18 New Street Miami, OR 97219"
                    Bedrooms="8"
                    Bathrooms="8"
                    Area="545m2"
                    Floor="3"
                    parking="6 spots"
                    btn = "Schedule a visit"
                    
                />
                <Villacard  
                    img={imgv2}
                    villaname="Luxury Villa"
                    price="$1.180.000"
                    address="54 Mid Street Florida, OR 27001"
                    Bedrooms="6"
                    Bathrooms="5"
                    Area="450m2"
                    Floor="3"
                    parking="8 spots"
                    btn = "Schedule a visit"

                />
                <Villacard  
                    img={imgv3}
                    villaname="Luxury Villa"
                    price="$1.460.000"
                    address="26 Old Street Miami, OR 38540"
                    Bedrooms="5"
                    Bathrooms="4"
                    Area="225m2"
                    Floor="3"
                    parking="10 spots"
                    btn = "Schedule a visit"

                />
                <Villacard  
                    img={imgv4}
                    villaname="Apartment"
                    price="$584.500"
                    address="12 New Street Miami, OR 12650"
                    Bedrooms="4"
                    Bathrooms="3"
                    Area="125m2"
                    Floor="25th"
                    parking="2 cars"
                    btn = "Schedule a visit"

                />
                <Villacard  
                    img={imgv5}
                    villaname="penthouse"
                    price="$925.600"
                    address="34 Beach Street Miami, OR 42680"
                    Bedrooms="4"
                    Bathrooms="4"
                    Area="180m2"
                    Floor="38th"
                    parking="2 cars"
                    btn = "Schedule a visit"

                />
                <Villacard  
                    img={imgv6}
                    villaname="Modern Condo"
                    price="$450.600"
                    address="22 New Street Portland, OR 16540 "
                    Bedrooms="3"
                    Bathrooms="2"
                    Area="165m2"
                    Floor="26th"
                    parking="3 cars"
                    btn = "Schedule a visit"

                />
            </div>
        </div>
    )
}

export default Vills;

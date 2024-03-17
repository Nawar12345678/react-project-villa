import React from 'react'
import Hero from '../Hero/Hero';
import Heroimg from 'E:/React/villa/src/assets/page-heading-bg.jpg';
import './Properties.css'
import { NavLink } from 'react-router-dom';
import Vills from '../Vills/Vills';

const Properties = () => {
return (
    <div  className="properties-part">
        <div className="hero-properties">
        <Hero img ={Heroimg} 
    btn ="Home/ Properties"
    desc = "Properties" 
    />
        </div>
        
        <div className="nav-villa">
    <div className="items">
        <div className="nav-item">Show All</div>
        <div className="nav-item">Appartment</div>
        <div className="nav-item">Vill House</div>
        <div className="nav-item">Penthouse</div>
    </div>
</div>


    <div className="vills-prop-part">
        <Vills />
    </div>
    <div className="vills-prop-part2">
        <Vills />
    </div>
    <div className= "icon-prop">
    <ul class="pagination">
            <li><a href="#">1</a></li>
            <li><a class="is_active" href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">&gt;&gt;</a></li>
        </ul>
    </div>
        </div>
    
)
}

export default Properties

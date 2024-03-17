import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import  './NavBar.css';

const NavBar = () => {
return (
    <div className = "Navbar-Container">
        <h1> VILLA </h1>
    <div className = "items">
        
    <NavLink
        to= "/"
        className = {({ isActive}) => 
        isActive ? "active" : ""
        }
        >
        Home
        
        </NavLink> 
    
    <NavLink
        to= "/Properties"
        className = {({ isActive}) => 
        isActive ? "active" : ""
        }>
            Properties
            
    </NavLink> 

    <NavLink
    to = "/PropertyDetails"
        className = {({ isActive}) => 
        isActive ? "active" : ""
        }>
    PropertyDetails
    </NavLink> 

    <NavLink
        to= "/ContactUS"
        className = {({ isActive}) => 
        isActive ? "active" : ""
        } >
        ContactUS
    </NavLink> 

    <button> schedule visit</button>

    </div>
    </div>


)
}

export default NavBar;
import React from 'react'
import { BsFacebook, BsInstagram, BsFillMapFill, BsEnvelopeFill } from "react-icons/bs";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import './Info.css'

const Info = () => {
return (
    <div className="info-container">
    <div className="info-items">
        <div>
        <BsEnvelopeFill className="icon" />
        <p>info@company.com</p>
        </div>
        <div>
        <BsFillMapFill className="icon" />
        <p>sunny Isless Beach, FL33160</p>
        </div>
    </div>
    <div className="social-icons">
        <BsFacebook className="icon-color"/>
        <BsInstagram className="icon-color"/>
        <FaLinkedin className="icon-color"/>
        <FaTwitter className="icon-color"/>
    </div>
    </div>
);
}

export default Info;


/*import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import { BsFillMapFill } from "react-icons/bs";*/
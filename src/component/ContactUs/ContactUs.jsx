import React from 'react'
import Herocontact from 'E:/React/villa/src/assets/page-heading-bg.jpg';
import Hero from '../Hero/Hero';
import './ContactUs.css'
import Form from '../Form/Form'
import Contactcard from '../Contactcard/Contactcard';
import imgcc from 'E:/React/villa/src/assets/phone-icon.png';
import imgcc2 from 'E:/React/villa/src/assets/email-icon.png';
import Footer from '../Footer/Footer';


const ContactUs = () => {
return (
<div className="contactus-part">
        <div className="hero-contactus">
        <Hero img ={Herocontact} 
    btn ="Home / Contact Us"
    desc = "Contact Us" 
    />
    </div>
    <div className="form-part">
    <div className="form-part-contact">
        <Form />
    </div>
    <div className="info-contact">
        <h6> | Contact Us</h6>
        <h2>Get In Touch With Our Agents</h2>
        </div>
        <p>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website. If you need more information, please contact us</p>

            <div className="card1">
            <Contactcard  imgcc={imgcc}
                title = "010-020-0340"
                desc =" Phone Number"
                />
            </div>
            <div className="card2">
            <Contactcard  imgcc={imgcc2}
                title = "info@villa.co"
                desc =" Business Email"
                />
            </div>
            <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" frameborder="0"  >
            </iframe>
            </div>
            
                
                </div>
                <div className="footer-contact">
                    <Footer />
                </div>
        </div>



    
)
}

export default ContactUs

import React from 'react';
import Hero from '../Hero/Hero';
import Homebg from 'E:/React/villa/src/assets/banner-01.jpg';
import Featured from '../Featured/Featured';
import featurimg from 'E:/React/villa/src/assets/featured.jpg';
import './Home.css';
import Video from '../Video/Video';
import imgvideo from 'E:/React/villa/src/assets/video-bg.jpg';
import fram from 'E:/React/villa/src/assets/video-frame.jpg';
import Bestdeal from '../Bestdeal/Bestdeal';
import Vills from '../Vills/Vills';
import Contactpart from '../Contactpart/Contactpart';
import imgcont from 'E:/React/villa/src/assets/contact-bg.jpg';
import Form from '../Form/Form';
import Contactcard from '../Contactcard/Contactcard';
import imgcc from 'E:/React/villa/src/assets/phone-icon.png';
import imgcc2 from 'E:/React/villa/src/assets/email-icon.png';
import Footer from '../Footer/Footer';




const Home = () => {
return (
    <div className="home">
    <Hero img={Homebg} 
    btn ="Toronto, Canada"
    desc = "Hurry! GET ThE BESt VILLA FOR YOU"/>
    <div className="home-fet">
    <Featured img={featurimg}
    title = "| FEATURED"
    desc = "Best Appartment & Sea view"
    />
    <div className="video-part">
        <Video img1={imgvideo}
        title = "| Video View"
        desc = "Get Closer View & Different Feeling"
        img2 ={fram}
        />
    </div>
    <Bestdeal title= " | Best Deal"
    desc= "Find Your Best Deal Right Now! " />
    </div>
    <div className="villas">
        <div className="vills-top">
            <h6>| Properties </h6>
            <h2> We Provide The Best Property You Like</h2>
        </div>
        </div>
        <div className="cardvilla">
        <Vills />
        </div>
        <div className="contact">
        <Contactpart imgc={imgcont}
        title = "| Contact Us"
        desc = "Get In Touch With Our Agents" />
        <div className=" formpart">
        <Form />
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12469.776493332698!2d-80.14036379941481!3d25.907788681148624!2m3!1f357.26927939317244!2f20.870722720054623!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1642869952544!5m2!1sen!2sth" width="100%" height="500px" frameborder="0"  >
            </iframe>
            <div className= "contactcard-part">
                <Contactcard  imgcc={imgcc}
                title = "010-020-0340"
                desc =" Phone Number"
                />
            <div className= "contactcard-part2">
                <Contactcard  imgcc={imgcc2}
                title = "info@villa.co"
                desc =" Business Email"
                />
                </div>
            </div>
            </div>
            
        </div>
        </div>
        <div className="footer-part-home">
                <Footer />
            </div>



        </div>


)
}

export default Home;


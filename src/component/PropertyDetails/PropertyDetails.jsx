import React from 'react'
import Hero from '../Hero/Hero';
import Heroproperty from 'E:/React/villa/src/assets/page-heading-bg.jpg';
import './PropertyDetails.css'
import Card from '../Card/Card';
import propimg from 'E:/React/villa/src/assets/single-property.jpg';
import Pragraph from '../Pragraph/Pragraph';
import Bestdeal from '../Bestdeal/Bestdeal';
import Footer from '../Footer/Footer';
const PropertyDetails = () => {

    const questionsAndAnswers = [
        {
        question: 'Best useful Links',
        answer: 'Dolor almesit amet, consectetur adipiscing elit, sed doesnt eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
        question: 'How does this work',
        answer: 'Dolor almesit amet, consectetur adipiscing elit, sed doesnt eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
        question: 'why is Villa the best',
        answer: 'Dolor almesit amet, consectetur adipiscing elit, sed doesnt eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ];
return (
    <div className="property-part">
        <div className="hero-property">
        <Hero img ={Heroproperty} 
    btn ="Home / Single Property"
    desc = "Single Property" 
    />
        </div>
        <div className="property-part2">
            <div className="card-property">
                <Card />
                < div className="img-property">
                <img src={propimg} alt=""/>
                </div>
                <div className="info-property">
                    <span> Appartment</span>
                    <h4>24 New Street Miami, OR 24560</h4>
                    <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.
            
            <br></br>
            <br></br>When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&amp;B DSA poutine neutra cardigan hoodie pop-up.</p>
                </div>
                <div className="paragraph-property">
            
                <Pragraph questionsAndAnswers={questionsAndAnswers}  />
    </div>
    <div className="bestdeal-property">
    <Bestdeal title= " | Best Deal"
    desc= "Find Your Best Deal Right Now! " />
    </div>

                </div>

            </div>
            <div className="Footer-property">
        <Footer />
    </div>
    


        </div>

    
)
}

export default PropertyDetails

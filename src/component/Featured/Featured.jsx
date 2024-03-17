import React from 'react';
import Card from '../Card/Card.jsx';
import Pragraph from '../Pragraph/Pragraph';
import './Featured.css';


const Featured = ({img, title, desc}) => {
    const questionsAndAnswers = [
        {
        question: 'Best useful Links',
        answer: 'Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it. '
        },
        {
        question: 'How does this work',
        answer: 'Dolor almesit amet, consectetur adipiscing elit, sed doesnt eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
        },
        {
        question: 'why is Villa the best',
        answer: 'Dolor almesit amet, consectetur adipiscing elit, sed doesnt eiusmod tempor incididunt ut labore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ];
    
return (
    <div className="feature">
        <div className="image-container">
        <img src={img} alt="" />
    </div>
    
    <div className="feat-info">
        <h5> {title} </h5>
        <p> {desc}</p>
        <Pragraph questionsAndAnswers={questionsAndAnswers}  />

    </div>
    <div className="feat-card">
        <Card />
    </div>
    </div>
)
}

export default Featured

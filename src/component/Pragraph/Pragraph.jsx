import React from "react";
import { useState } from "react";
import './Pragraph.css';
const Pragraph = ({ questionsAndAnswers }) => {
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const toggleAnswer = (question) => {
    setSelectedQuestion(question);
    };

    return (
    <div className="pragraph">
        {questionsAndAnswers.map(({ question, answer }, index) => (
        <div key={index} className="question-answer">
            <h4
            onClick={() => toggleAnswer(question)}
            className={selectedQuestion === question ? 'selected' : ''}
            >
            {question}
            </h4>
            {selectedQuestion === question && (
            <h6>
                {answer}
            </h6>
            )}
        </div>
        ))}
    </div>
    );
};
export default Pragraph;
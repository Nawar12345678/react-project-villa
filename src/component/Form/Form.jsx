import React from 'react';
import './Form.css';

const Form = () => {
return (
    <div className="form">
        <form>

            <label>
                Full Name
                <input type="text" name= "Full Name" placeholder="Your Name.." autocomplete="on" required=""/>
            </label>

            <label>
                Email Address
                <input type="text" name= "Email Address" pattern="[^@]*@[^ @]*" placeholder="Your E-mail..."  required="" />
            </label>

            <label>
                Subject 
                <input type="text" name= "Subject "  placeholder="Subject .." autocomplete="on" />
            </label>

            <label>
                Message 
                <input type="text" name= "Message" placeholder="Your Message .." style={{height: 120}} />
            </label>

            <input type="submit" value= "Send Message " />
        </form>
    </div>
)
}

export default Form
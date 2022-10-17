import React from 'react';
import '../App.css';
import './ContactForm.css'
import { Button } from './Button';

function ContactForm() {
    return (
        <div className='wrapper'>
            <div className='contact-container'>
                <h1>Contact Me!</h1>
                <p>Leave your contact information and I will get back to you as soon as possible</p>
                <form className='form-container' onsubmit="return false" action="https://formsubmit.co/c50023bd85fb245ce8294f8da3abbcd8" method="POST">
                    <label>Name: </label><input type="text" name="name" placeholder="Enter your name..." required />
                    <br></br>
                    <label>Email: </label><input type="email" name="email" placeholder="Enter your email address..." required />
                    <br></br>
                    <label>Write your messsage: </label><textarea placeholder="Your Message... :)" class="form-control" name="message" rows="10" required></textarea>
                    <br></br>
                    <div className='btn-container'>
                        <Button type="submit" buttonStyle='btn--large'><i class="fas fa-check-circle"></i>  Submit</Button>
                    </div>
                </form >
            </div >
        </div>
    );
}

export default ContactForm;

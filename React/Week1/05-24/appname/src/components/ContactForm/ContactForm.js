import React from "react";
import style from './ContactForm.module.css'

export class ContactForm extends React.Component{
    render()
    {
       return(
        <form className={`${style.form}`}>
            <div className={`${style.formFields}`}> 
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" name="fullName" id="fullName" />
            </div>
           
            <div className={`${style.formFields}`} > 
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" />
            </div>

            <div className={`${style.formFields}`}>
                <label htmlFor="phone">phone:</label>
                <input type="tel" name="phone" id="phone" />
            </div>
            <div className={`${style.formFields}`}>
                <label htmlFor="questions">questions:</label>
                <textarea name="" id="" cols="30" rows="2"></textarea>
            </div>

           <button type="submit">Submit</button>
        </form>
       ) 
    }
}

//full name, email, phone, textarea(questions/coments) , submit button
import React from 'react';
import email from "../img/email.png";
import mobile from "../img/phone.png";




    export default function Contact() {
  return (
   <div className="contact">
   <h2>Get in toutch with us .</h2> 
        <div className="emailForm">
        <form className="formData" action="https://formspree.io/krskrysiak@gmail.com" method="POST"> 
        <input type="text" name="name" placeholder="Name"/>
        <input type="text" name="name" placeholder="Topic"/>
        <textarea  rows="14" cols="10" wrap="soft\" className="textData" name="message" placeholder="Your message"/>
          <input type="submit" value="Send"/>
          </form>
         </div>
        <div className="contactIconsContainer">
        <img src={email} alt="email icon"/>contact@offbeat.com
        <img src={mobile} alt="email icon"/>798789798</div>
        </div>  
  );
}
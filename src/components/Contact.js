import React from 'react';
import email from "../img/emailIcon.png";
import mobile from "../img/phoneIcon.png";




    export  const Contact =() => {
  return (
   <div className="contact">
   <h2 className="d-md-none pt-5 text-center">Get in toutch with us .</h2> 
       
       <Icons/>
        </div>  
  );
};


     export const  Icons=() => {
  return (
  
        <div className="contactIconsContainer d-flex flex-column flex-md-row align-items-center justify-content-center">
        <img src={email} alt="email icon"/>contact@offbeat.com
        <img src={mobile} alt="email icon"/>798789798</div>
        
  );
}
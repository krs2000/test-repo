import React from 'react';
import email from "../img/emailIcon.png";
import mobile from "../img/phoneIcon.png";




    export  const Contact =() => {
  return (
   <div className="contact container d-flex flex-column align-items-center justify-content-md-center">
   <h2 className="d-md-none pt-5 pb-5 text-center">Contact</h2> 
         
         <h3 className="text-bold text-center"><strong>OFFBEAT MOTION </strong></h3>
      
    <h4  className="text-center">Rafal Lipinski </h4>

       <Icons/>
        </div>  
  );
};


     export const  Icons=() => {
  return (
        <div className="container">
     
        <div className="contactIconsContainer d-flex flex-column flex-md-row align-items-center justify-content-center">
        <img src={email} alt="email icon"/>lipinskirafal90@gmail.com
        <img src={mobile} alt="email icon"/>+31626973849</div>
        </div>
  );
}
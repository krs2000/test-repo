import React from 'react';
import Vimeo from "../img/vimeo.png";
import FB from '../img/fb.png';
import YT from "../img/yt.png";
import Insta from "../img/insta.png";

import VimeoWhite from "../img/vimeo-w.png";
import FBWhite from '../img/fb-w.png';
import YTWhite from "../img/yt-w.png";
import InstaWhite from "../img/insta-w.png";


 export const  Footer = (props) => {
  return (
    <footer className={props.color === "white" ? "footerWhite" : "footer"} id="footer">
    <div>
        <a href="https://www.facebook.com/Offbeat-Motion-1878745515727983/" target="_blank"><img src={ props.color === "white" ? FBWhite : FB} alt="vimeo"/></a>
        <a href="https://vimeo.com/offbeatmotion" target="_blank"><img src={ props.color === "white" ? VimeoWhite : Vimeo} alt="vimeo"/></a>
        <a href="https://www.youtube.com/channel/UCc5xYdSn1EX96F1cjuGk45Q" target="_blank"><img src={ props.color === "white" ? YTWhite :YT} alt="yt"/></a>
         <a href="https://www.instagram.com/offbeat_motion/" target="_blank"><img src={ props.color === "white" ? InstaWhite :Insta} alt="insta"/></a>
    </div>
  
    </footer>
  );
}




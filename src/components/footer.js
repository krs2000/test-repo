import React from 'react';
import Vimeo from "../img/vimeo.png";
import FB from '../img/fb.png';
import YT from "../img/yt.png";
import Insta from "../img/insta.png";

    export default function footer() {
  return (
    <footer className="footer">
        <a href="https://www.facebook.com/Offbeat-Motion-1878745515727983/"><img src={FB} alt="vimeo"/></a>
        <a href="https://vimeo.com/offbeatmotion"><img src={Vimeo} alt="vimeo"/></a>
        <a href="https://www.youtube.com/channel/UCc5xYdSn1EX96F1cjuGk45Q"><img src={YT} alt="yt"/></a>
         <a href="https://www.instagram.com/lipalipsky/"><img src={Insta} alt="insta"/></a>
    </footer>
  );
}
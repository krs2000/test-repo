import Carousel from 'nuka-carousel';
import React from 'react';
import a from "../img/Clients/1.png";
import b from "../img/Clients/2.png";
import c from "../img/Clients/3.png";
import d from "../img/Clients/4.png";
import e from "../img/Clients/5.png";
import r from "../img/r.png";
import l from "../img/l.png";

export default class extends React.Component {
    
    render() {
      return (
        <div className="carouselContainer d-md-none">
        <Carousel className="Carousel"
         renderCenterLeftControls={({ previousSlide }) => (
          <div onClick={previousSlide}><img className="arrow" src={l}/></div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div onClick={nextSlide}><img className="arrow"  src={r}/></div>
        )}>
       <a href="https://amber-hotel.pl/en/" target="_blank" className="d-flex flex-column align-items-center justify-content-center"><img className="clientImg mb-2" src={a} alt="" /><h3>Hotel Amber</h3></a>
         <a href="http://r4y.pl/" target="_blank" className="d-flex flex-column align-items-center justify-content-center"><img className="clientImg mb-2" src={b} alt="" /><h3>R4U</h3></a>
        <a href="http://boatandbike.pl/" target="_blank" className="d-flex flex-column align-items-center justify-content-center"><img className="clientImg mb-2" src={c} alt="" /><h3>Boat & Bike</h3></a>
         <a href="http://www.miastoaniolow.com.pl/" target="_blank" className="d-flex flex-column align-items-center justify-content-center"><img className="clientImg mb-2" src={d} alt="" /><h3>Miasto Aniołów</h3></a>
         <a href="http://sierakowice.pl/" target="_blank" className="d-flex flex-column align-items-center justify-content-center"><img className="clientImg mb-2" src={e} alt="" /><h3>Sierakowice Region</h3></a>
        </Carousel>
        </div>
      );
    }
  }
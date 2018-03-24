import React, { Component } from "react";
import Arrow from "../img/arrow.png";
import "../styles/App.css";
import Video from "../img/cover.mp4";
import Logo from "../img/logo.png";
import Footer from "./footer";
// import MiniVideos from "./MiniVideos"
import About from "./About";
import Contact from "./Contact";
import Clients from "./Clients";
// import {MyInfiniteScrollExample} from "./MiniVideoss"
import MiniVideos from "./VideosContainer";
import Sierakowice from "../img/mini/gminaSierakowice.jpg";
import scrollToElement from 'scroll-to-element'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Home"
    };
  }

  returnNavigation = () => {
    return (
      <nav ><div className="logo">
  <img
          src={Logo}
          alt="logo"
          
          onClick={() => {
            this.setState({ activeTab: "Home" });
          }}
        /></div>
  
        <div className="mobileNav">
          <input id="burger" type="checkbox" />
          <label htmlFor="burger">
            <span />
            <span />
            <span />
          </label>
          <div class="menuListContainer">
            <ul>
              <li>
                <a className="videosLink">Videos</a>
              </li>
              <li>
                <a className="aboutLink ">About</a>
              </li>
              <li>
                <a className="clientsLink">Clients</a>
              </li>
              <li>
                <a className="contactLink">Contact</a>
              </li>
            </ul>
            <Footer/>
          </div>
        </div>
      </nav>
    );
  };

  returnMainVideo = () => {
    return (
      <div>
        <section id="cover" className="cover">
          <div className="mainVideoCotainer">
            <video autoPlay muted playsInline loop className="mainVideo">
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <div className="mainVideouttonsContainer"><button class="coverBtn">SHOWREEL</button><button class="coverBtn">CONTACT</button>
<div className="arrow">
<i className="fa fa-arrow-circle-down  fa-4x pulse"></i></div></div>
        </section>
        <MiniVideos />
      </div>
    );
  };


scrollDown=()=>{
scrollToElement('#content',{
   offset: 0,
   ease: 'linear',
    duration: 1000,
    align : "middle"
});};

scrollUp=()=>{
window.scrollTo(0,0);
}

  render() {
    return (
      <div className="App">
        {this.returnNavigation()}
       <div id="content"> {this.state.activeTab === "Home" && this.returnMainVideo()}
        {this.state.activeTab === "Videos" && this.returnMainVideo()}
        {this.state.activeTab === "About" && <About />}
        {this.state.activeTab === "Clients" && <Clients />}
        {this.state.activeTab === "Contact" && <Contact />}
</div>
        <div id="myModal" className="modal">
          <span className="close">&times;</span>
          <div className="modal-content" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

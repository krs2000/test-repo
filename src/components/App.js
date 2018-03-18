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
      <nav className="navigationBar">
        <img
          src={Logo}
          alt="logo"
          className="logo"
          onClick={() => {
            this.setState({ activeTab: "Home" });
          }}
        />
        <div className="bigNav">
          <a
            className="videosLink"
            onClick={() => {
              this.setState({ activeTab: "Videos" });
              this.scrollDown()
            }}
          >
            Videos
          </a>
          <span />
          <a
            className="aboutLink "
            onClick={() => {
              this.setState({ activeTab: "About" });
              this.scrollUp();
            }}
          >
            About
          </a>
          <span />
          <a
            className="clientsLink"
            onClick={() => {
              this.setState({ activeTab: "Clients" });
              this.scrollUp();
            }}
          >
            Clients
          </a>
          <span />
          <a
            className="contactLink"
            onClick={() => {
              this.setState({ activeTab: "Contact" });
              this.scrollUp();
            }}
          >
            Contact
          </a>
        </div>
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
          <img src={Arrow} className="floater arrow" alt="arrow" onClick={this.scrollDown} />
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

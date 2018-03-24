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
import scrollToElement from "scroll-to-element";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Home",
      cover: true
    };
  }
  componentDidMount() {
    if(this.state.activeTab="Home"){
    document.addEventListener("scroll", () =>
      this.setState({ activeTab: "Videos" })
    );}
  }

  returnNavigation = () => {
    return (
      <nav>
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            onClick={() => {
              this.setState({ activeTab: "Home" });
            }}
          />
          <div className="mobileNav">
            <input id="burger" type="checkbox" />
            <label htmlFor="burger">
              <span />
              <span />
              <span />
            </label>
            <div className="menuListContainer">
              <ul>
                <li>
                  <a
                    className="videosLink"
                    onClick={() => {
                      this.setState({ activeTab: "Videos" });
                      var burger = document.getElementById("burger");
                      burger.checked = false;
                      this.scrollDown();
                    }}
                  >
                    Videos
                  </a>
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
        </div>
      </nav>
    );
  };

  returnMainVideoStart = () => {
    return (
      <div>
        <section id="cover" className="cover">
          <div className="mainVideoCotainer">
            <video autoPlay muted playsInline loop className="mainVideo">
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <div className="mainVideouttonsContainer">
            <button className="coverBtn">SHOWREEL</button>
            <button className="coverBtn">CONTACT</button>
            <div
              className="arrow"
              onClick={() => {
                this.setState({ activeTab: "Videos" });
                this.scrollDown(), 1000;
              }}
            >
              <i className="fa fa-arrow-circle-down  fa-4x pulse" />
            </div>
          </div>
        </section>
      </div>
    );
  };

  scrollDown = () => {
    scrollToElement("#cover", {
      offset: 600,
      ease: "linear",
      duration: 1000,
      align: "top"
    });
  };

  scrollUp = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div className="App">
        {this.returnNavigation()}
        <div id="content">
          {" "}
          {this.state.cover === true && this.returnMainVideoStart()}
          {this.state.activeTab === "Videos" && <MiniVideos />}
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

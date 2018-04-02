import React, { Component } from "react";
import Arrow from "../img/arrow.png";
import "../styles/App.css";
import Video from "../img/cover.mp4";
import Logo from "../img/logo.png";
import {footer } from "./footer";
// import MiniVideos from "./MiniVideos"
import About from "./About";
import {Contact} from "./Contact";
import Clients from "./Clients";
// import {MyInfiniteScrollExample} from "./MiniVideoss"
import MiniVideos from "./VideosContainer";
import Sierakowice from "../img/mini/gminaSierakowice.jpg";
import scrollToElement from "scroll-to-element";
import {Footer} from "./footer";

const embed = "249434988";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Home",
      cover: true
    };

    // this.scrollUp();
    document.addEventListener("scroll", () => {
      if ((this.state.activeTab = "Home" && this.state.cover === true)) {
        this.setState({
          activeTab: "Home-Videos"
        });
      }
    });
  }

    openModal = (e) => {
    // this.setState({modalIsOpen:true})
    e.preventDefault();
    if(document.getElementById("myShowreelModal")){ document.getElementById("myShowreelModal").style.display ="block";}
  }

  componentDidMount() {}

  returnNavigation = () => {
    return (
      <nav>
        <div className="logo">
          <img
            src={Logo}
            alt="logo"
            className="mainLogo"
            onClick={() => {
              this.setState({ activeTab: "Home" });
            }}
          />
          <div
            className="mobileNav"
            onClick={e => {
              var burger = document.getElementById("burger");
              if (e.target == document.getElementsByClassName("mobileNav")[0]) {
                if (burger.checked === false) {
                  burger.checked = true;
                } else {
                  burger.checked = false;
                }
              }
            }}
          >
            <input id="burger" type="checkbox" />
            <label htmlFor="burger">
              <span />
              <span />
              <span />
            </label>
            <div
              className="menuListContainer"
              onClick={event => event.preventDefault()}
            >
              <ul>
                <li>
                  <a
                    className="videosLink"
                    onClick={e => {
                      e.preventDefault();
                      this.scrollUp();
                      this.setState({
                        activeTab: "Home",
                        cover: true
                      });

                      var burger = document.getElementById("burger");
                      burger.checked = false;
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="videosLink"
                    onClick={() => {
                      this.setState({ activeTab: "Videos" });
                      var burger = document.getElementById("burger");
                      burger.checked = false;
                      console.log(this.state);
                    }}
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    className="aboutLink "
                    onClick={() => {
                      this.setState({
                        activeTab: "About",
                        cover: false
                      });
                      var burger = document.getElementById("burger");
                      burger.checked = false;
                      console.log(this.state);
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className="clientsLink"
                    onClick={() => {
                      this.scrollUp();
                      this.setState({
                        activeTab: "Clients",
                        cover: false
                      });
                      var burger = document.getElementById("burger");
                      burger.checked = false;
                      console.log(this.state);
                    }}
                  >
                    Clients
                  </a>
                </li>
                <li>
                  <a
                    className="contactLink"
                    onClick={() => {
                      this.setState({
                        activeTab: "Contact",
                        cover: false
                      });
                      var burger = document.getElementById("burger");
                      burger.checked = false;
                    }}
                  >
                    Contact
                  </a>
                </li>
                           </ul>
                            <Footer color="white"/>

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
            <button className="coverBtn" onClick={e=>this.openModal(e)}>SHOWREEL</button>
            <button className="coverBtn"  onClick={()=>{this.setState({activeTab:"Contact"})}}>CONTACT</button>
            <div
              className="arrow"
              onClick={() => {
                this.setState({ activeTab: "Home-Videos" });
                this.scrollDown();
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
      offset: 300,
      ease: "linear",
      duration: 1000,
      align: "middle"
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
          {this.state.cover === true &&
            (this.state.activeTab === "Home" ||
              this.state.activeTab === "Home-Videos") &&
            this.returnMainVideoStart()}
          {(this.state.activeTab === "Videos" ||
            this.state.activeTab === "Home-Videos") && <MiniVideos />}
          {this.state.activeTab === "About" && <About />}
          {this.state.activeTab === "Clients" && <Clients />}
          {this.state.activeTab === "Contact" && <Contact />}
        </div>
          <div id="myShowreelModal" className="modal">
          <div
            className="close"
            onClick={() =>
              (document.getElementById("myShowreelModal").style.display =
                "none")
            }
          >
      
             &times;
          </div>

          <div className="modal-content" />
          <div className="vimeoMovieContainer fadeIn"><iframe className="vimeoMovie" src={`https://player.vimeo.com/video/${embed}?title=0&byline=0&portrait=0`}  frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div>
        </div>
      </div>
    );
  }
}

export default App;

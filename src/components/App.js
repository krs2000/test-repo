import React, { Component } from "react";

import "../styles/App.css";
import Video from "../img/cover.mp4";
import Logo from "../img/logo.png";
import Spinner from "../img/spinner.gif";

import About from "./About";
import { Contact } from "./Contact";
import Clients from "./Clients";
import MiniVideos from "./VideosContainer";

import scrollToElement from "scroll-to-element";
import { Footer } from "./footer";

const embed = "249434988";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Home-Videos",
      cover: true,
      link: '0'
    };
    document.addEventListener("scroll", () => {
      if ((this.state.activeTab === "Home-Videos" && this.state.cover === false)) {
        this.setState({
          activeTab: "Home-Videos",
          cover: true,
        });
      }
    });

  }

  openModal = (e) => {
    // this.setState({modalIsOpen:true})
    e.preventDefault();
    if (document.getElementById("myShowreelModal")) { document.getElementById("myShowreelModal").style.display = "block"; }
  }

  componentDidMount() {
    var video = document.getElementById("mainVideo");
    var loader = document.getElementById("loader");
    video.addEventListener('loadeddata', function() {
      loader.style.display= 'none';
   }, false);
   

   
  }

  returnNavigation = () => {
    return (
      <nav className="">
        <div className="logo text-center d-md-none">
          <img
            src={Logo}
            alt="logo"
            className="mainLogo"
            onClick={() => {
              this.setState({
                cover: true,
                activeTab: "Home",
                link: '99'
              });
           
              this.scrollUp()
            }
        }
          />
          <div
            className="mobileNav"

            onClick={e => {
              var burger = document.getElementById("burger");
              if (e.target === document.getElementsByClassName("mobileNav")[0]) {
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
                    onClick={(e) => {
                      e.preventDefault();
                      this.setState({
                        activeTab: "Videos",
                        cover: true,
                   
                      }, this.scrollDown());
                      var burger = document.getElementById("burger");
                      burger.checked = false;
                    }
                    }
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
              <Footer color="white" />

            </div>
          </div>
        </div>
        <div className="d-md-flex d-none md-nav justify-content-center">

          <img
            src={Logo}
            alt="logo"
            className="mainLogoMd mr-5"
            onClick={e => {
              e.preventDefault();
              this.scrollUp();
              this.setState({
                activeTab: "Home-Videos",
                cover: true,
                link: '99'
              });

              var burger = document.getElementById("burger");
              burger.checked = false;
              this.scrollUp();
            }}
          />

          <ul className="d-flex pr-5">

            <li className={`mr-5 pt-3 ${this.state.link === '2' ? 'active' : ''}`} onClick={() => {
              this.setState({
                activeTab: "About",
                cover: true,
                link: '2'
              })
            }}>
              About
              </li>
            <li className={`mr-5 pt-3 ${this.state.link === '3' ? 'active' : ''}`} onClick={() => {
              this.setState({
                activeTab: "Home-Videos",
                cover: false,
                link: '3'
              })
              this.scrollDown();
            }}>
              Videos
              </li>
            <li className={`mr-5 pt-3 ${this.state.link === '4' ? 'active' : ''}`} onClick={() => {
              this.setState({
                activeTab: "Clients",
                cover: false,
                link: '4'
              })

            }}>
              Clients
              </li>
            <li className={`mr-5 pt-3 ${this.state.link === '5' ? 'active' : ''}`} onClick={() => {
              this.setState({
                activeTab: "Contact",
                cover: false,
                link: '5'
              })
            }}>
              Contact
              </li>
          </ul>
        </div>
      </nav>
    );
  };

  returnMainVideoStart = () => {
    return (
      <div>
        <section id="cover" className="cover">
          <div className="mainVideoCotainer">
            <video autoPlay muted playsInline loop className="mainVideo" id="mainVideo"
             
            >
              <source src={Video} type="video/mp4" />
            </video>
          </div>
          <div className="mainVideouttonsContainer">
            <button className="coverBtn" onClick={e => this.openModal(e)}>SHOWREEL</button>
            <button className="coverBtn" onClick={() => { this.setState({ activeTab: "Contact" }) }}>CONTACT</button>
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
    scrollToElement("#masonry", {
      offset: -100,
      ease: "linear",
      duration: 500,
      align: "middle"
    });
  };


  scrollUp = () => {
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <div>
        <div id="loader">
        <img src={Spinner} className='spinner'/>
        </div>
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
            <div className="vimeoMovieContainer fadeIn"><iframe className="vimeoMovie" src={`https://player.vimeo.com/video/${embed}?title=0&byline=0&portrait=0`} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

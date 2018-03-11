import React, { Component } from 'react';
import Arrow from "../img/arrow.png"
import '../styles/App.css';
import Video from "../img/cover.mp4"
import Logo from "../img/logo.png"
import Footer from "./footer"
import MiniVideos from "./MiniVideos"
import About from "./About";
import Contact from "./Contact";
import Clients from "./Clients";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Home"
    };
  }

returnNavigation=()=>{
  return(  <nav className="navigationBar">
        <img src={Logo} alt="logo" className="logo" onClick={()=>{this.setState({activeTab:"Home"})}} />
        <div className="bigNav">
        <a className="videosLink" onClick={()=>{this.setState({activeTab:"Videos"})}}>Videos</a>
        <span></span>
        <a className="aboutLink " onClick={()=>{this.setState({activeTab:"About"})}}>About</a>
        <span></span>
        <a className="clientsLink" onClick={()=>{this.setState({activeTab:"Clients"})}}>Clients</a>
        <span></span>
        <a className="contactLink" onClick={()=>{this.setState({activeTab:"Contact"})}}>Contact</a>
        </div>
    <div className="mobileNav">
      <input id="burger" type="checkbox" />
    <label htmlFor="burger">
        <span></span>
        <span></span>
        <span></span>
    </label>
    <div >
        <ul>
            <li><a className="videosLink">Videos</a></li>
            <li><a className="aboutLink ">About</a></li>
            <li><a className="clientsLink">Clients</a></li>
            <li><a className="contactLink">Contact</a></li>
        </ul>
</div>
</div>
    </nav>
    )
}

returnMainVideo=()=>{
  return( <section id="cover" className="cover">
        <div className="mainVideoCotainer">
            <video autoPlay muted playsInline loop className="mainVideo">
                <source src={Video} type="video/mp4"/>
            </video>
        </div>     
     <img src={Arrow} className="floater arrow" alt="arrow"/>
    </section>
    )
}

  render() {
    return (
      <div className="App">
{ /*<div id="spinner"></div>  */}
  {this.returnNavigation()}
   {this.state.activeTab==="Home" && this.returnMainVideo()}
{this.state.activeTab==="Videos" && <MiniVideos/>}
{this.state.activeTab==="About" && <About/>}
{this.state.activeTab==="Clients" && <Clients/>}
{this.state.activeTab==="Contact" && <Contact/>}
    <div className="videoPlayer">
    </div>
<div id="myModal" className="modal">
    <span className="close">&times;</span>
  <div className="modal-content">
  </div>
</div>
  <Footer/>
      </div>

    );
  }
}

export default App;

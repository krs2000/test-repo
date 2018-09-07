import Carousel from 'nuka-carousel';
import React from 'react';
import a from "../img/Clients/1.png";
import b from "../img/Clients/2.png";
import c from "../img/Clients/3.png";
import d from "../img/Clients/4.png";
import e from "../img/Clients/5.png";
import r from "../img/r.png";
import l from "../img/l.png";
import axios from 'axios'


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    'data': []
    }
  }

    
  componentWillMount() {
    this.fetchPhotos();
  }

  fetchPhotos() {
    axios
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=8280733643.1677ed0.437656397eff47c8bdb10050b411a35f')
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          data : res.data.data
        })
        console.log(this.state)
      })
      console.log(this.state)
  }

    render() {
      return (
        <div className="carouselContainer d-md-none">
        <Carousel className="Carousel" 
        autoplay ="true"
         renderCenterLeftControls={({ previousSlide }) => (
          <div onClick={previousSlide}><img className="arrow"  src={l}/></div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div onClick={nextSlide}><img className="arrow" id="arrow" src={r}/></div>
        )}>
        {

        }
        {

    this.state.data.lenght > 0 ?  <a href="https://amber-hotel.pl/en/" target="_blank" className="d-flex flex-column align-items-center justify-content-center"><img className="clientImg mb-2" src={this.state.data !== undefined ? this.state.data[0].images.standard_resolution.url : ''} alt="" /></a> : ''
        }
        </Carousel>
        {

this.state.data.lenght > 0 ?  <a href="https://amber-hotel.pl/en/" target="_blank" className="d-flex flex-column align-items-center justify-content-center"><img className="clientImg mb-2" src={this.state.data !== undefined ? this.state.data[0].images.standard_resolution.url : ''} alt="" /></a> : ''
    }
        </div>
      );
    }
  }
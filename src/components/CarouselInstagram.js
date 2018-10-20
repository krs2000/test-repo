import Carousel from 'nuka-carousel';
import React from 'react';

import r from "../img/r.png";
import l from "../img/l.png";
import axios from 'axios'
import instabig from "../img/instabig.png";

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      'data': [],
      loaded: false
    }
  }


  componentWillMount() {
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    axios
      .get('https://api.instagram.com/v1/users/self/media/recent/?access_token=8280733643.1677ed0.437656397eff47c8bdb10050b411a35f')
      .then((res) => {
        this.setState({
          data: res.data.data,
          loaded: true
        })
      })
  }

  componentWillUnmount () {
    this.setState({
      loaded: false
    })
  }


  render() {
    return (
      <div>
     { this.state.loaded ? (
      <div className="carouselContainer d-flex align-items-center  flex-column">
 
     <img className="img-fluid instabig mt-4 mb-4" src={instabig} alt="instagram"/> 
        <Carousel className="Carousel"
          slidesToShow={5}
          cellAlign="center"
          cellSpacing={50}
          className ="d-none d-md-block "
          autoplay="1"
          edgeEasing="easeOutCirc"
          speed={5000}
          renderCenterLeftControls={({ previousSlide }) => (
            <div onClick={previousSlide}></div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div onClick={nextSlide}></div>
          )}
        >
          {      this.state.loaded && this.state.data.map(item =><a key={`insta-${item.name}`} href={item.link} target="_blank"> <div  style={ { backgroundImage: `url(${item.images.standard_resolution.url})` } } className="instaImgDiv d-flex justify-content-start align-items-start"></div></a>)
          }
        </Carousel>
        <Carousel className="Carousel"
        className ="d-md-none"
          slidesToShow={3}
          autoplay= "1"
          cellAlign="center"
          cellSpacing={10}
          edgeEasing="easeOutCirc"
          speed={5000}
          renderCenterLeftControls={({ previousSlide }) => (
            <div onClick={previousSlide}></div>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <div onClick={nextSlide}></div>
          )}
        >
          {this.state.data.map(item =><a key={`insta-${item.name}`} href={item.link} target="_blank"> <div  style={ { backgroundImage: `url(${item.images.standard_resolution.url})` } } className="instaImgDiv d-flex justify-content-start align-items-start"></div></a>)
          }
        </Carousel>

      </div>) : ''  } </div>
    );
  }
}
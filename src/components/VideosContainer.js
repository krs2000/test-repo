import React, { Component } from "react";
import sierakowice from "../img/mini/gminaSierakowice.jpg";
import hotel from "../img/mini/hotelAmber.jpg";
import showreel from "../img/mini/showreel.jpg";
import ahmed from "../img/mini/ahmed.jpg";
import twentySix from "../img/mini/26.jpg";
import summer from "../img/mini/SummerCityOfAngels2017.jpg";
import blueNotes from "../img/mini/blueNotes.jpg";
import boatAndBike from "../img/mini/boatAndBikeGdansk.jpg";
import demo from "../img/mini/demoOffBeat.jpg";
import worldIsShakeing from "../img/mini/worldIsShaking.jpg";
import scrollToElement from "scroll-to-element";
import {Footer} from "./footer";
import {Icons} from "./Contact";
// functional stateless component

export default class MiniVideos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videosImages: [
				sierakowice,
				hotel,
				showreel,
				ahmed,
				twentySix,
				summer,
				blueNotes,
				boatAndBike,
				demo,
				worldIsShakeing
			],
			count: 0
		};
	}

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

	componentDidMount() {
		if (this.state.count === this.state.videosImages.length - 1) {

			this.scrollDown();
		}
	}

	render() {
		return (
			<div className="videoList" id="masonry">
				{this.state.videosImages.map(item => {
					return (
						<div className="miniVideoConatainer">
						<div>	<img
								data-id="src"
								key={`mini-${item}`}
								className="miniVideo"
								src={item}
								alt="sample video"
								onLoad={() => {
									this.setState({
										count: this.state.count + 1
									});
									console.log(this.state.count);
								}}
							/>
						</div></div>
					);
				})}
				<Footer/>

				<div className="upIcon" onClick={() => {
               
                this.scrollUp();
              }}>

			
				<i className="fa fa-arrow-circle-up  fa-4x pulse" />
			</div>
			</div>
		);
	}
}

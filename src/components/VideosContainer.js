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

// functional stateless component

export default class MiniVideos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videosImages: [sierakowice,
				hotel,
				showreel,
				ahmed,
				twentySix,
				summer,
				blueNotes,
				boatAndBike,
				demo,
				worldIsShakeing,
				]
		};
	}


	render() {
		return (
			<div className="videoList">
				{this.state.videosImages.map(item => {
					return (
						<div className="miniVideoConatainer" data-id="src">
							<img
								className="miniVideo"
								src={item}
								alt="sample video"
							/>
						</div>
					);
				})}
			</div>
		);
	}
}

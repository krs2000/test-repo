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
import { Footer } from "./footer";
import { Icons } from "./Contact";
// functional stateless component

export default class MiniVideos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			  embed : "249434988",
			modalIsOpen: false,
			videosImages: [
				{
					name: sierakowice,
					alt: "Sierakowice Community",
					src:"249434988"
					//to change
				},
				{
					name: hotel,
					alt: "Hotel Amber (commercial)",
					src:"233170709"
				},
				{
					name: showreel,
					alt: "Showreel",
					src:"249434988"
					//to change
				},
				{
					name: ahmed,
					alt: `Ahmet Killic in City of Angels 
					(event video)`,
					src:"233168772"
				},
				{
					
					name: blueNotes,
					alt: "L.I.P.A - Blue notes (music video)",
					src:"249434988"
				},
				{
					name: summer,
					alt: "May in City of Angels (event video)",
					src:"233164515"
				},
				{
				
						name: demo,
					alt: "Offbeat motion (promo video)",
					src:"233167640"
					
				},
				{
					name: boatAndBike,
					alt: "Boat and Bike (internet promotion video)",
					src: "233169986"
				},
				{
					name: twentySix,
					alt: `L.I.P.A - 26 
					(music video)`,
					src:"248575397"
				},
				{
					name: worldIsShakeing,
					alt: "The world is shaking",
					src:"233165733"
				}
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
    scrollToElement("#cover", {
      offset: 0,
      ease: "linear",
      duration: 1000,
      align: "middle"
    });
  };


	componentDidMount() {
		if (this.state.count === this.state.videosImages.length - 1) {
			this.scrollDown();
		}
	}

	openModal = (e,src) => {
	e.preventDefault();
		this.setState({embed: src},function(){	
		if(document.getElementById("myModal")){ document.getElementById("myModal").style.display ="block";}
		});

		
	}

	render() {
		return (<div><div className="videoList" id="masonry">
				{this.state.videosImages.map(item => {
					return (
						<div
							className="miniVideoConatainer"
							key={`mini-video-${item.name}`}
							onClick={e=>this.openModal(e ,item.src)}
						>
							<img
								data-id="src"
								className="miniVideo"
								src={item.name}
								alt={item.alt}
							
							
									onLoad={() => {
										
									this.setState({
										count: this.state.count + 1
									});
								}}

							/>
							<span className="alt" id={`mini-text-${item}`}>
								{item.alt}{" "}
							</span>
						</div>
					);
				})}

				<Footer />

				<div
					className="upIcon"
					onClick={() => {
						this.scrollUp();
					}}
				>
					<i className="fa fa-arrow-circle-up  fa-4x pulse" />
				</div>
				<div id="myModal" className="modal">
					<div
						className="close"
						onClick={() =>
							(document.getElementById("myModal").style.display =
								"none")
						}
					>
			
						 &times;
					</div>

					<div className="modal-content" id="modal-content" />
					<div className="vimeoMovieContainer fadeIn"><iframe className="vimeoMovie" src={`https://player.vimeo.com/video/${this.state.embed}?title=0&byline=0&portrait=0`}  frameBorder="0" webkitallowfullscreen="true"  mozallowfullscreen="true" allowFullScreen></iframe></div>
				</div>
			</div>
			</div>
		);
	}
}

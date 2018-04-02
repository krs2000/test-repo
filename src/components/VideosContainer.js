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
const embed = "249434988";
export default class MiniVideos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
			modalIsOpen: false,
			videosImages: [
				{
					name: sierakowice,
					alt: "Sierakowice Community"
				},
				{
					name: hotel,
					alt: "Hotel Amber (commercial)"
				},
				{
					name: showreel,
					alt: "Showreel"
				},
				{
					name: ahmed,
					alt: `Ahmet Killic in City of Angels 
					(event video)`
				},
				{
					name: twentySix,
					alt: `L.I.P.A - 26 
					(music video)`
				},
				{
					name: summer,
					alt: "May in City of Angels (event video)"
				},
				{
					name: blueNotes,
					alt: "L.I.P.A - Blue notes (music video)"
				},
				{
					name: boatAndBike,
					alt: "Boat and Bike (internet promotion video)"
				},
				{
					name: demo,
					alt: "Offbeat motion (promo video)"
				},
				{
					name: worldIsShakeing,
					alt: "The world is shaking"
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
		window.scrollTo(0, 0);
	};

	componentDidMount() {
		if (this.state.count === this.state.videosImages.length - 1) {
			this.scrollDown();
		}
	}

	openModal = (e) => {
		// this.setState({modalIsOpen:true})
		e.preventDefault();
		if(document.getElementById("myModal")){ document.getElementById("myModal").style.display ="block";}
	}

	render() {
		return (
			<div className="videoList" id="masonry">
				{this.state.videosImages.map(item => {
					return (
						<div
							className="miniVideoConatainer"
							key={`mini-video-${item.name}`}
							onClick={e=>this.openModal(e)}
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

					<div className="modal-content" />
					<div className="vimeoMovieContainer fadeIn"><iframe className="vimeoMovie" src={`https://player.vimeo.com/video/${embed}?title=0&byline=0&portrait=0`}  frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe></div>
				</div>
			</div>
		);
	}
}

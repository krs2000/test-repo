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
import mamAwersje from "../img/mini/mamAwersje.jpg";
import autumnAngels from "../img/mini/autumnAngels.jpg";
import marrige from "../img/mini/marrige.jpg";
import SandraDawid from "../img/mini/SandraDawid.jpg";
import boatAndBike2018 from "../img/mini/boatAndBike2018.jpg";
import scrollToElement from "scroll-to-element";

import { Icons } from "./Contact";
// functional stateless component

export default class MiniVideos extends Component {
	constructor(props) {
		super(props);
		this.state = {
			embed: "285693859",
			modalIsOpen: false,
			videosImages: [
				{
					name: sierakowice,
					alt: "Sierakowice Community",
					src: "284411742"
				},
				{
					name: hotel,
					alt: "Hotel Amber (commercial)",
					src: "233170709"
				},
				{
					name: SandraDawid,
					alt: "Sandra & Dawid (Thanks to parents - wedding)",
					src: "284410391"
				},	{
					name: boatAndBike2018,
					alt: "Boat & Bike 2018",
					src: "285693076"
				},
				{
					name: marrige,
					alt: "Marriage anniversary (event coverage)",
					src: "273362488"
				} ,
				{
					name: showreel,
					alt: "Showreel",
					src: "285693859"
				},
				{
					name: ahmed,
					alt: `Ahmet Killic in City of Angels 
					(event video)`,
					src: "233168772"
				},
				{

					name: blueNotes,
					alt: "L.I.P.A - Blue notes (music video)",
					src: "249434988"
				},
				{
					name: summer,
					alt: "May in City of Angels (event video)",
					src: "233164515"
				},
				{

					name: demo,
					alt: "Offbeat motion (promo video)",
					src: "233167640"

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
					src: "248575397"
				},
				{
					name: worldIsShakeing,
					alt: "The world is shaking",
					src: "233165733"
				},
				{
					name: mamAwersje,
					alt: "L.I.P.A - Mam awersję (street video)",
					src: "269695775"
				},
				{
					name: autumnAngels,
					alt: "autumn city of angels",
					src: "233166754"
				} ,
				
			
			],
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


	openModal = (e, src) => {
		e.preventDefault();
		this.setState({ embed: src }, function () {
			if (document.getElementById("myModal")) { document.getElementById("myModal").style.display = "block"; }
		});


	}

	render() {
		return (<div><div className="videoList" id="masonry">
			{this.state.videosImages.map(item => {
				return (
					<div
						className="miniVideoConatainer"
						key={`mini-video-${item.name}`}
						onClick={e => this.openModal(e, item.src)}
					>
						<img
							data-id="src"
							className="miniVideo"
							src={item.name}
							alt={item.alt}
						/>
						<span className="alt" id={`mini-text-${item}`}>
						<p>{item.alt}{" "}</p>	
						</span>
					</div>
				);
			})}

		


			<div id="myModal" className="modal">
				<div
					className="close"
					onClick={() =>{
					
						this.setState({ embed: "" })
						document.getElementById("myModal").style.display =
							"none";
							document.getElementById("myModal").style.display =
							"none";
					}
					}
				>

					&times;
					</div>
				<div className="modal-content" id="modal-content" />
				<div className="vimeoMovieContainer fadeIn">{ this.state.embed == "" ? "" : <iframe id="vimeoMoviePlayed" className="vimeoMovie" src={`https://player.vimeo.com/video/${this.state.embed}?title=0&byline=0&portrait=0`} frameBorder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>}</div>
			</div>
				
		</div>
		</div>
		);
	}
}

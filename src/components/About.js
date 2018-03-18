import React from "react";
import camera from "../img/about/camera.jpg";
import dron from "../img/about/dron.jpg";
import forest from "../img/about/forest.jpg";

export default function About() {
  return (
    <div className="aboutContainer">
      <h2> About</h2>
      <div className="aboutContent">
        <div className="photos">
          <img src={camera} alt="camera oprerator" />
          <img src={dron} alt="dron oprerator" />
          <img src={forest} alt="camera forest" />
        </div>
        <div className="aboutText">
          <h3>
           <strong> Offbeat motion </strong>is a video production studio founded by Rafał
            Lipiński.
          </h3>
          <hr />
          <p>
            I am filmmaker based in the Netherlands, work worldwide. I
            specialize in commercials, music videos, promotional films,
            corporate films and event coverage. I take care of it all - starting
            from script through arranging a set, ligthing, shooting, editing and
            color grading. For bigger projects I organize and cooperate with
            film crew. I don't treat making films as a work, cinematography is
            my passion, most of my time a spend on constant developing skills. I
            always follow modern standards.
          </p>
          <hr />
          <p>
            <strong>
              {" "}
              Every new project I treat as a challange. My main principle is the
              originality of each video. Better go and watch my work, you will
              see that every project is different and uniqe.
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

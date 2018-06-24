import React from "react";
import camera from "../img/about/camera.jpg";
import dron from "../img/about/dron.jpg";
import forest from "../img/about/forest.jpg";

export default class About extends React.Component {
  

  render() {



    return (
      <div className="aboutContainer">
        <h2 className="d-md-none mt-5 mb-5"> About</h2>
        <div className="aboutContent">
          <div className="aboutMainImg "></div>
          {/* <img src={camera} alt="camera oprerator"/> */}
          {/* <img src={dron} alt="dron oprerator" />
        <img src={forest} alt="camera forest" /> */}



          <div className='row m-0'>
            <div className="col-md-6">
              <div className="row m-0">
                <div className="col-md-12  justify-content-center">
                  <h3 className="col-12 col-md-8 ml-auto mt-5 mb-5  justify-content-start text-initial">
                    <strong> Offbeat motion </strong>is a video production studio founded by Rafał
                     Lipiński.
          </h3>
                  <article className="col-12 col-md-8 ml-auto mb-3 mt-5 text-left">
                    I am filmmaker based in the Netherlands, work worldwide. I
                    specialize in commercials, music videos, promotional films,
                    corporate films and event coverage. I take care of it all - starting
                    from script through arranging a set, ligthing, shooting, editing and
                    color grading. For bigger projects I organize and cooperate with
                    film crew. I don't treat making films as a work, cinematography is
                    my passion, most of my time a spend on constant developing skills. I
                    always follow modern standards.
          </article>
                  <article className="col-12 col-md-8 ml-auto mt-3 mb-5 text-left">
                    <strong>
                      {" "}
                      <br />
                      Every new project I treat as a challange. My main principle is the
                      originality of each video. Better go and watch my work, you will
                      see that every project is different and uniqe.
            </strong>
                  </article>
                </div>
              </div>

            </div>
            <div className="col-12 mb-0 ml-0 mt-0 p-0 col-md-6 dronImgContainer d-flex justify-content-center align-items-center mr-auto">
              <div className='dronImg mr-auto'></div>
            </div>
          </div>
        </div>
   
      </div>

    );
  }
}

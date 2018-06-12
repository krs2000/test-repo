import React from "react";
import a from "../img/Clients/1.png";
import b from "../img/Clients/2.png";
import c from "../img/Clients/3.png";
import d from "../img/Clients/4.png";
import e from "../img/Clients/5.png";

const ClientsStyle = {
  color: "white",
  height: "100vh",
  display: "flex",
  "align-items": "center",
  "justify-content": "center",
  "flex-direction": "column"
};

export default function Clients() {
  return (
    <div className="clients">
    <div className="clientsContainer">
   
        <h2 className="d-md-none pt-5 m-auto text-center">Clients.</h2>

      <div className="images d-flex flex-column flex-md-row  align-items-center justify-content-center">
         <a href="https://amber-hotel.pl/en/" target="_blank"><img className="clientImg" src={a} alt="" /></a>
         <a href="http://r4y.pl/" target="_blank"><img className="clientImg" src={b} alt="" /></a>
        <a href="http://boatandbike.pl/" target="_blank"><img className="clientImg" src={c} alt="" /></a>
         <a href="http://www.miastoaniolow.com.pl/" target="_blank"><img className="clientImg" src={d} alt="" /></a>
         <a href="http://sierakowice.pl/" target="_blank"><img className="clientImg" src={e} alt="" /></a>
      </div>
    </div>
    </div>
  );
}

import React from "react";
import a from "../img/clients/1.png";
import b from "../img/clients/2.png";
import c from "../img/clients/3.png";
import d from "../img/clients/4.png";
import e from "../img/clients/5.png";

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
   
        <h2>Clients.</h2>

      <div className="images">
        <img className="clientImg" src={a} alt="" />
        <img className="clientImg" src={b} alt="" />
        <img className="clientImg" src={c} alt="" />
        <img className="clientImg" src={d} alt="" />
        <img className="clientImg" src={e} alt="" />
      </div>
    </div>
    </div>
  );
}

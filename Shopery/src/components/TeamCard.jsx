import React from "react";
import famer from "../assets/imgs/famer.png";
import Socical from "./Socical";
const TeamCard = () => {
  return (
    <div className="card p-0 TeamCard " style={{ width: 312, height: 368 }}>
      <img src={famer} className="card-img-top position-relative " alt="..." />
      <div className="Link flex-row  absolute_center translate-middle">
        <Socical brand={"twitter"} />
        <Socical brand={"instagram"} />
        <Socical brand={"mail"} />
        <Socical brand={"link"} />
      </div>
      <div className="card-body">
        <h5 className="card-title fs-4">Jenny Wilson</h5>
        <p className="card-text fs-6">CEO & founder </p>
      </div>
    </div>
  );
};

export default TeamCard;

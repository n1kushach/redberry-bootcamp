import React from "react";
import RedberryLogo from "../assets/redberry-logo.svg";
import RedberryAgency from "../assets/redberry-agency.svg";

export const Home = () => {
  return (
    <div className="bg-full">
      <div className="container">
        <div className="top">
          <img className="redberryLogo" src={RedberryLogo}></img>
          <hr className="line-home"></hr>
        </div>
        <div className="mid">
          <img className="mid-img" src={RedberryAgency}></img>
          <button className="addres-btn">რეზიუმეს დამატება</button>
        </div>
      </div>
    </div>
  );
};

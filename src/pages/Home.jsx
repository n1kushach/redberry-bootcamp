import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/info">
            <button className="addres-btn">რეზიუმეს დამატება</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import BackIcon from "../assets/icon-back.svg";
import { useNavigate } from "react-router-dom";
import { FormPersonInfo } from "../components/FormPersonInfo";

export const PersonInfo = () => {
  const navigate = useNavigate();

  return (
    <div className="personInfo">
      <div className="left">
        <div className="containerPersonInfo">
          <div className="info-top">
            <span onClick={() => navigate(-1)} className="icon-span">
              <img className="icon-back" src={BackIcon}></img>
            </span>
            <div className="title">
              <h1>პირადი ინფო</h1>
              <p>1/3</p>
            </div>
          </div>
          <hr className="title-hr"></hr>
          <div className="info-bottom">
            <FormPersonInfo/>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

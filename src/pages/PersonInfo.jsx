import React from "react";
import IconBack from "../assets/icon-back.svg";
import { PersonInfoForm } from "../components/PersonInfoForm/PersonInfoForm";

export const PersonInfo = ({ data, setData }) => {
  return (
    <div className="main">
      <div className="left">
        <div className="main-left">
          <div className="iconBackDiv">
            <img className="icon-back" src={IconBack}></img>
          </div>
          <h1>პირადი ინფო</h1>
          <span>1/3</span>
        </div>
        <PersonInfoForm />
      </div>
      <div className="right"></div>
    </div>
  );
};

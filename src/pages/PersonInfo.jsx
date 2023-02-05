import React from "react";
import IconBack from "../assets/icon-back.svg";
import { PersonInfoForm } from "../components/PersonInfoForm/PersonInfoForm";
import { useState } from "react";
import { Resume } from "../components/Resume/Resume";

export const PersonInfo = ({ mainData, setMainData }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [image, setImage] = useState("");
  const [about_me, setAbout_me] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone_number] = useState("");


  const formData ={
    name: name,
    surname: surname,
    image: image,
    about_me: about_me,
    email: email,
    phone_number: phone_number,
  }

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
        <PersonInfoForm
          setName={setName}
          setSurname={setSurname}
          setImage={setImage}
          setAbout_me={setAbout_me}
          setEmail={setEmail}
          setPhone_number={setPhone_number}
          mainData={mainData}
          setMainData={setMainData}
        />
      </div>
      <div className="right">
        <Resume data={formData}/>
      </div>
    </div>
  );
};

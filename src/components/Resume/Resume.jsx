import React from "react";
import EmailIcon from "../../assets/email.svg";
import PhoneIcon from "../../assets/phone.svg";
import "./Resume.css";

export const Resume = ({ infoValues, experience, img }) => {
  console.log(infoValues?.image);

  return (
    <div className="main">
      <div className="resumeContainer">
        <div className="resumeTop">
          <div className="resumeTopLeft">
            <h1 className="nameSurname">{infoValues?.name} {infoValues?.surname}</h1>
            <div className="topRow">
              <img src={EmailIcon}></img>
              <h1 className="contact">{infoValues?.email}</h1>
            </div>
            <div className="topRow">
              <img src={PhoneIcon}></img>
              <h1 className="contact">{infoValues?.phone_number}</h1>
            </div>
              <h1 className="contentTitle">ჩემს შესახებ</h1>
            <p className="paragraph">
            {infoValues?.about_me}
            </p>
          </div>
          <div className="resumeTopRight">
              {infoValues?.image && <img src={infoValues?.image} className="resumeImg"></img>}
              {img && <img src={img} className="resumeImg"></img>}
          </div>
        </div>
        <div className="resumeExperience">
          <h1 className="contentTitle">ჩემს შესახებ</h1>
          <h1 className="experience">
          {experience?.position}, {experience?.employer}
          </h1>
          <h1 className="date">
          {experience?.start_date} - {experience?.due_date}
          </h1>
          <h1 className="paragraph">{experience?.description}</h1>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import EmailIcon from "../../assets/email.svg";
import PhoneIcon from "../../assets/phone.svg";
import { useEffect } from "react";
import "./Resume.css";

export const Resume = ({ infoValues, img, experience, experiences,  mainData, educations, degrees }) => {




  return (
    <div className="main">
      <div className="resumeContainer">
        <div className="resumeTop">
          <div className="resumeTopLeft">
            <h1 className="nameSurname">
              {infoValues?.name} {infoValues?.surname}
            </h1>
            <div className="topRow">
              {infoValues?.email && <img src={EmailIcon}></img>}
              <h1 className="contact">{infoValues?.email}</h1>
            </div>
            <div className="topRow">
              {infoValues?.phone_number && <img src={PhoneIcon}></img>}
              <h1 className="contact">{infoValues?.phone_number}</h1>
            </div>
            {infoValues?.about_me && (
              <h1 className="contentTitle">ჩემს შესახებ</h1>
            )}
            <p className="paragraph">{infoValues?.about_me}</p>
          </div>
          <div className="resumeTopRight">
            {img ? (
              <img src={img} className="resumeImg"></img>
            ) : (
              <img src={infoValues?.image} className="resumeImg"></img>
            )}
          </div>
        </div>
        <div className="resumeExperience">
          {experience?.position && (
            <h1 className="contentTitle">ჩემს შესახებ</h1>
          )}
          
          {experience?.position && (
            <h1 className="experience">
              {experience?.position}, {experience?.employer}
            </h1>
          )}
          {experience?.start_date && (
            <h1 className="date">
              {experience?.start_date} - {experience?.due_date}
            </h1>
          )}
          <h1 className="paragraph">{experience?.description}</h1>
        </div>
        <div className="resumeExperience">
          {educations?.institute && (
            <h1 className="contentTitle">{educations?.institute}</h1>
          )}
          
          {educations?.degree_id && (
            <h1 className="experience">
              {degrees[educations?.degree_id]["title"]}
            </h1>
          )}
          {educations?.due_date && (
            <h1 className="date">
              {educations?.due_date}
            </h1>
          )}
          <h1 className="paragraph">{educations?.description}</h1>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import EmailIcon from "../../assets/email.svg";
import PhoneIcon from "../../assets/phone.svg";
import "./Resume.css";

export const Resume = ({ infoValues, experience }) => {
  console.log(infoValues?.image);

  return (
    <div className="main">
      <div className="resumeContainer">
        <div className="resumeTop">
          <div className="resumeTopLeft">
            <h1 className="nameSurname">ნიკუშა ჭავჭავაძე</h1>
            <div className="topRow">
              <img src={EmailIcon}></img>
              <h1 className="contact">niikusha420@redberry.ge</h1>
            </div>
            <div className="topRow">
              <img src={PhoneIcon}></img>
              <h1 className="contact">+995 555 506 505</h1>
            </div>
              <h1 className="contentTitle">ჩემს შესახებ</h1>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae
              quis, sint molestias quasi officiis ipsam esse harum eos ex,
              possimus aspernatur porro! Necessitatibus deserunt nihil
              voluptatibus quas perspiciatis accusantium.
            </p>
          </div>
          <div className="resumeTopRight">
              <img
                className="resumeImg"
                src="https://www.w3schools.com/w3images/avatar6.png"
              />
          </div>
        </div>
        <div className="resumeExperience">
          <h1 className="contentTitle">ჩემს შესახებ</h1>
          <h1 className="experience">
            React Developer, Majorel Georgia
          </h1>
          <h1 className="date">
            2021/07/27 - 2021/08/27
          </h1>
          <h1 className="experienceDescription">{experience?.description}</h1>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./Resume.css";
import EmailIcon from "../../assets/email.svg";
import PhoneIcon from "../../assets/phone.svg";

export const Resume = (props) => {
  return (
    <div className="resumeDiv">
      <div className="resumeDivTop">
        <div className="resumeDivTopLeft">
          <h1>
            {props.data?.name} {props.data?.surname}
          </h1>
          <div className="resumeDivTopLeftContact">
            <div className="resumeContactRow">
              {props.data?.email && (
                <img className="resumeEmailIcon" src={EmailIcon}></img>
              )}
              <span>{props.data?.email}</span>
            </div>
            <div className="resumeContactRow">
              {props.data?.phone_number && (
                <img className="resumePhoneIcon" src={PhoneIcon}></img>
              )}
              <span>{props.data?.phone_number}</span>
            </div>
          </div>
          <div className="resumeAbout">
            {props.data?.about_me && <h1>ჩემს შესახებ</h1>}
            <p>{props.data?.about_me}</p>
          </div>
        </div>
        <div className="resumeDivTopRight">
          {props.data?.image && (
            <img className="resumeImage" src={props?.data.image}></img>
          )}
        </div>
      </div>
    </div>
  );
};

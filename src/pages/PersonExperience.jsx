import React from "react";
import { Resume } from "../components/Resume/Resume";
import { PersonExperienceForm } from "../components/PersonExperienceForm/PersonExperienceForm";
import IconBack from "../assets/icon-back.svg";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

export const PersonExperience = ({ mainData, setMainData }) => {


  const [count, setCount] = useState(0);
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [start_date, setStart_date] = useState("");
  const [due_date, setDue_date] = useState("");
  const [description, setDescription] = useState("");





  return (
    <div className="main">
      <div className="left left-experience">
        <div className="main-left">
          <div className="iconBackDiv">
            <img className="icon-back" src={IconBack}></img>
          </div>
          <h1>გამოცდილება</h1>
          <span>2/3</span>
        </div>
        <PersonExperienceForm    
          count={count}
          setMainData={setMainData}
          setPosition={setPosition}
          setCompany={setCompany}
          setStart_date={setStart_date}
          setDue_date={setDue_date}
          setDescription={setDescription}
        />
        {[...Array(count)].map((item, index) => {
          return <PersonExperienceForm count={count} key={index} />;
        })}
        <div className="addFormDiv">
          <button
            className="addExperienceBtn"
            onClick={() => setCount(count + 1)}
          >
            Add
          </button>
        </div>
      </div>
      <div className="right">
        <Resume data={mainData} />
      </div>
    </div>
  );
};

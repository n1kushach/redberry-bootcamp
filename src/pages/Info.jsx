import React, { useState } from "react";
import { InfoForm } from "../components/InfoForm/InfoForm";
import { Resume } from "../components/Resume/Resume";

export const Info = ({ formData, mainData, setMainData}) => {
  const [infoValues, setInfoValues] = useState({
    name: "",
    surname: "",
    image: "",
    about_me: "",
    email: "",
    phone_number: "",
  });

  // console.log(infoValues)

  return (
    <div className="main">
      <div className="left">
        <div className="container">
          <div className="left-header">
            <h1>პირადი ინფო</h1>
            <span>1/3</span>
          </div>
          <InfoForm  formData={formData} mainData={mainData} setMainData={setMainData} infoValues={infoValues} setInfoValues={setInfoValues} />
        </div>
      </div>
      <div className="right">
        <Resume infoValues={infoValues}/>
      </div>
    </div>
  );
};

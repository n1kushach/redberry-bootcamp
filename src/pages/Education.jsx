import React from "react";
import { EducationForm } from "../components/EducationForm/EducationForm";
import { Resume } from "../components/Resume/Resume";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const schema = yup.object().shape({
  institute: yup.string().required(),
  degree_id: yup.string().required(),
  due_date: yup.date(),
  description: yup.string().required(),
});

export const Education = ({ apiData, mainData, setMainData, img, setImg }) => {
  const [count, setCount] = useState(0);
  const [educationValues, setEducationValues] = useState({
    institute: "",
    degree_id: 0,
    due_date: "",
    description: "",
  });
  const [degrees, setDegrees] = useState([])


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const formData = new FormData();

  const postData = async () => {
    formData.append("name", mainData.name);
    formData.append("surname", mainData.surname);
    formData.append("email", mainData.email);
    formData.append("phone_number", mainData.phone_number);
    for(let i in mainData.experiences){
      formData.append(`experiences[${i}][position]`, mainData.experiences[i].position.toString())
      formData.append(`experiences[${i}][employer]`, mainData.experiences[i].employer.toString())
      formData.append(`experiences[${i}][start_date]`, mainData.experiences[i].start_date.toString())
      formData.append(`experiences[${i}][due_date]`, mainData.experiences[i].due_date.toString())
      formData.append(`experiences[${i}][description]`, mainData.experiences[i].description.toString())
    }
    for(let i in mainData.educations){
      formData.append(`educations[${i}][institute]`, mainData.educations[i].institute.toString())
      formData.append(`educations[${i}][degree_id]`, mainData.educations[i].degree_id)
      formData.append(`educations[${i}][due_date]`, mainData.educations[i].due_date.toString())
      formData.append(`educations[${i}][description]`, mainData.educations[i].description.toString())
    }

    formData.append("image", mainData.image);
    try {
      const response = await Axios.post(
        "https://resume.redberryinternship.ge/api/cvs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    const sampleData = {
      institute: educationValues.institute,
      degree_id: educationValues.degree_id,
      due_date: educationValues.due_date,
      description: educationValues.description,
    };
    setMainData({ ...mainData, educations: [sampleData] });
    console.log(mainData);
  };

  const navigate = useNavigate();

  return (
    <div className="main">
      <div className="left">
        <div className="container">
          <div className="left-header">
            <h1>განათლება</h1>
            <span>3/3</span>
          </div>
          {/* FIRST EDUCATION FORM HERE */}
          <EducationForm
            degrees={degrees}
            setDegrees={setDegrees}
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            mainData={mainData}
            setMainData={setMainData}
            educationValues={educationValues}
            setEducationValues={setEducationValues}
          />
          {/* FIRST EDUCATION FORM HERE */}

          {/* MAP EDUCATION FORM HERE */}
          <div>
            <button className="addExperienceBtn">
              მეტი გამოცდილების დამატება
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="navButtons">
            <button className="info-next">უკან</button>
            <button className="info-next">შემდეგი</button>
            <button onClick={() => postData()}>POST</button>
          </form>
        </div>
      </div>
      <div className="right"><Resume degrees={degrees} img={img} experience={mainData?.experiences[0]} educations={educationValues} infoValues={mainData}/></div>
    </div>
  );
};

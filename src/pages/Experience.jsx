import React, { useState } from "react";
import { ExperienceForm } from "../components/ExperienceForm/ExperienceForm";
import { Resume } from "../components/Resume/Resume";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  position: yup.string().required().min(2),
  employer: yup.string().required().min(2),
  start_date: yup.date(),
  due_date: yup.date(),
  description: yup.string().required(),
});

export const Experience = ({apiData,  mainData, setMainData, img, setImg }) => {
  const [experienceValues, setExperienceValues] = useState({
    position: "",
    employer: "",
    start_date: "",
    due_date: "",
    description: "",
  });
  const [count, setCount] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const startMonth = data.start_date.getMonth();
    const startDay = data.start_date.getDay();
    const startYear = data.start_date.getFullYear();
    const startDate = `${startYear}/${startMonth}/${startDay}`;
    const dueMonth = data.due_date.getMonth();
    const dueDay = data.due_date.getDay();
    const dueYear = data.due_date.getFullYear();
    const dueDate = `${dueYear}/${dueMonth}/${dueDay}`;

    const experienceData = {
      position: data.position,
      employer: data.employer,
      start_date: startDate,
      due_date: dueDate,
      description: data.description,
    };
    setMainData({...mainData, experiences : [experienceData]})

    navigate("/education");
  };

  return (
    <div className="main">
      <div className="left">
        <div className="container">
          <div className="left-header">
            <h1>გამოცდილება</h1>
            <span>2/3</span>
          </div>
          <ExperienceForm
          apiData={apiData}
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            mainData={mainData}
            setMainData={setMainData}
            experienceValues={experienceValues}
            setExperienceValues={setExperienceValues}
          />
          {[...Array(count)].map((item, index) => {
            return (
              <ExperienceForm
                key={index}
                onSubmit={onSubmit}
                register={register}
                handleSubmit={handleSubmit}
                errors={errors}
                mainData={mainData}
                setMainData={setMainData}
                experienceValues={experienceValues}
                setExperienceValues={setExperienceValues}
              />
            );
          })}
          <div>
            <button
              onClick={() => {
                setCount(count + 1);
                setExperienceValues({
                  position: "",
                  employer: "",
                  start_date: "",
                  due_date: "",
                  description: "",
                });
              }}
              className="addExperienceBtn"
            >
              მეტი გამოცდილების დამატება
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="navButtons">
            <button className="info-next">უკან</button>
            <button className="info-next">შემდეგი</button>
          </form>
        </div>
      </div>
      <div className="right"><Resume experience={experienceValues} infoValues={mainData}/></div>
    </div>
  );
};

import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ErrorIcon from "../../assets/Error.svg";
import GreenTick from "../../assets/GreenTick.svg";
import "./PersonExperienceForm.css";

export const PersonExperienceForm = ({mainData, count,  setMainData, setPosition, setCompany, setStart_date, setDue_date, setDescription}) => {


  const schema = yup.object().shape({
    position: yup
      .string()
      .required()
      .min(2)
      .matches(/^[ა-ჰ]+$/),
    employer: yup
      .string()
      .required()
      .min(2)
      .matches(/^[ა-ჰ]+$/),
    start_date: yup.mixed().required(),
    due_date: yup.mixed().required(),
    description: yup.string().required(),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  const onSubmit = (data) => {
    const formData = {
      position: data.position,
      employer: data.employer,
      start_date: data.start_date,
      due_date: data.due_date,
      description: data.description,
    }
    setMainData({ ...mainData, experiences: [{formData}] })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="experienceForm">
      <label className="experienceFormItem">
        <div className="experienceFormItemDiv">
          თანამდებობა
          <input className={errors.position ? "errorBorder" : "greenBorder"} type="text" placeholder="დეველოპერი, დიზაინერ, ა.შ." {...register("position", {onChange: (e) => {
            setPosition(e.target.value)
          }})}/>
        </div>
        <p>მინიმუმ 2 სიმბოლო</p>
      </label>
      <label className="experienceFormItem">
        <div className="experienceFormItemDiv">
          დამსაქმებელი
          <input className={errors.employer ? "errorBorder" : "greenBorder"} type="text" placeholder="დამსაქმებელი" {...register("employer", {onChange: (e) => {
            setCompany(e.target.value)
          }})}/>
        </div>
        <p>მინიმუმ 2 სიმბოლო</p>
      </label>
      <label className="experienceFormItem">
        <div className="experienceFormItemDiv">
          დაწყების რიცხვი
          <input className={errors.start_date ? "errorBorder" : "greenBorder"} type="date" {...register("start_date", {onChange: (e) => {
            setStart_date(e.target.value)
          }})}/>
        </div>
      </label>
      <label className="experienceFormItem">
        <div className="experienceFormItemDiv">
          დამთავრების რიცხვი
          <input className={errors.due_date ? "errorBorder" : "greenBorder"} type="date" {...register("due_date", {onChange: (e) => {
            setDue_date(e.target.value)
          }})}/>
        </div>
      </label>
      <label className="experienceFormItem">
        <div className="experienceFormItemDiv">
          აღწერა
          <input
            className={errors.description ? "errorBorder" : "greenBorder"}
            type="text"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            {...register("description", {onChange: (e) => {
              setDescription(e.target.value)
            }})}
          />
        </div>
        <hr className="hrExperience"></hr>
      </label>
      <div className="experienceFormItem">
            <button className="prevBtn">Prev</button>
            <button className="nextBtn">Next</button>
          </div>
    </form>
  );
};

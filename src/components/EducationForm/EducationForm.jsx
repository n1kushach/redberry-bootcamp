import React from "react";
import GreenTick from "../../assets/GreenTick.svg";
import "./EducationForm.css"
import { useEffect, useState } from "react";
import Axios from "axios"


export const EducationForm = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  mainData,
  setMainData,
  educationValues,
  setEducationValues,
  degrees,
  setDegrees
}) => {


  useEffect(() => {
    Axios.get("https://resume.redberryinternship.ge/api/degrees")
    .then((res) => {
      setDegrees(res.data)
    })
  }, [])


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="educationGrid">
      <div className="educationGridItem">
        <div className="col">
          <label
            className={
              errors && errors.institute?.message
                ? "label error"
                : "label success"
            }
          >
            სასწავლებელი
          </label>
          <div>
            <input
              placeholder="დეველოპერი, დიზაინერი, ა.შ"
              type="text"
              {...register("institute", {
                onChange: (e) => {
                  setEducationValues((prev) => ({
                    ...prev,
                    institute: e.target.value,
                  }));
                },
              })}
            />
            {errors && errors.institute?.message ? null : (
              <img className="educationTick" src={GreenTick}></img>
            )}
          </div>
          <p className="hint">მინიმუმ 2 სიმბოლო</p>
        </div>
      </div>
      <div className="educationGridItem">
        <div className="col">
          <label
            className={
              errors && errors.degree_id?.message
                ? "label error"
                : "label success"
            }
          >
            ხარისხი
          </label>
          <div>
            {/* API MAP HERE */}
            <select {...register("degree_id", {
                    onChange: (e) => {
                    
                      setEducationValues((prev) => ({
                        ...prev,
                        degree_id: e.target.value,
                      }));
                    }
                  })} className="selectEducation">
              {degrees.map((oneDegree) => {
                return (
                  <option key={oneDegree.id} value={oneDegree.id}>{oneDegree.title}</option>
                )
              })}
            </select>
            {errors && errors.degree_id?.message ? null : (
              <img className="educationTick" src={GreenTick}></img>
            )}
          </div>
        </div>
      </div>
      <div className="educationGridItem">
        <div className="col">
          <label
            className={
              errors && errors.due_date?.message
                ? "label error"
                : "label success"
            }
          >
            დამთავრების რიცხვი
          </label>
          <div>
            <input
              type="date"
              {...register("due_date", {
                onChange: (e) => {
                  setEducationValues((prev) => ({
                    ...prev,
                    due_date: e.target.value,
                  }));
                },
              })}
            />
          </div>
        </div>
      </div>
      <div className="educationGridItem">
        <div className="col">
          <label
            className={
              errors && errors.description?.message
                ? "label error"
                : "label success"
            }
          >
            აღწერა
          </label>
          <div>
            <input
              placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
              type="text"
              {...register("description", {
                onChange: (e) => {
                  setEducationValues((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                },
              })}
            />
            {errors && errors.description?.message ? null : (
              <img className="educationTick" src={GreenTick}></img>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

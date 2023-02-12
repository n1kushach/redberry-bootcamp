import React from "react";
import "./ExperienceForm.css";
import GreenTick from "../../assets/GreenTick.svg";

export const ExperienceForm = ({
  mainData,
  setMainData,
  experienceValues,
  setExperienceValues,
  register,
  handleSubmit,
  errors,
  onSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="experienceGrid">
      <div className="experienceGridItem">
        <div className="col">
          <label
            className={
              errors && errors.position?.message
                ? "label error"
                : "label success"
            }
          >
            თანამდებობა
          </label>
          <div>
            <input
              placeholder="დეველოპერი, დიზაინერი, ა.შ"
              type="text"
              {...register("position", {
                onChange: (e) => {
                  setExperienceValues((prev) => ({
                    ...prev,
                    position: e.target.value,
                  }));
                },
              })}
            />
            {errors && errors.position?.message ? null : (
              <img className="experienceTick" src={GreenTick}></img>
            )}
          </div>
          <p className="hint">მინიმუმ 2 სიმბოლო</p>
        </div>
      </div>
      <div className="experienceGridItem">
        <div className="col">
          <label
            className={
              errors && errors.employer?.message
                ? "label error"
                : "label success"
            }
          >
            დამსაქმებელი
          </label>
          <div>
            <input
              placeholder="დამსაქმებელი"
              type="text"
              {...register("employer", {
                onChange: (e) => {
                  setExperienceValues((prev) => ({
                    ...prev,
                    employer: e.target.value,
                  }));
                },
              })}
            />
            {errors && errors.employer?.message ? null : (
              <img className="experienceTick" src={GreenTick}></img>
            )}
          </div>
          <p className="hint">მინიმუმ 2 სიმბოლო</p>
        </div>
      </div>
      <div className="experienceGridItem">
        <div className="col">
          <label
            className={
              errors && errors.start_date?.message
                ? "label error"
                : "label success"
            }
          >
            დაწყების რიცხვი
          </label>
          <div>
            <input
              type="date"
              {...register("start_date", {
                onChange: (e) => {
                  // const startMonth = e.target.value.getMonth();
                  // const startDay = e.target.value.getDay();
                  // const startYear = e.target.valuegetFullYear();
                  // const startDate = `${startYear}/${startMonth}/${startDay}`;
                  setExperienceValues((prev) => ({
                    ...prev,
                    start_date: e.target.value,
                  }));
                },
              })}
            />
          </div>
        </div>
      </div>
      <div className="experienceGridItem">
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
                  // const dueMonth = e.target.value.getMonth();
                  // const dueDay = e.target.value.getDay();
                  // const dueYear = e.target.value.getFullYear();
                  // const dueDate = `${dueYear}/${dueMonth}/${dueDay}`;
                  setExperienceValues((prev) => ({
                    ...prev,
                    due_date: e.target.value,
                  }));
                },
              })}
            />
          </div>
        </div>
      </div>
      <div className="experienceGridItem">
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
                  setExperienceValues((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                },
              })}
            />
            {errors && errors.description?.message ? null : (
              <img className="experienceTick" src={GreenTick}></img>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorIcon from "../../assets/Error.svg";
import GreenTick from "../../assets/GreenTick.svg";
import * as yup from "yup";
import "./PersonInfoForm.css";
import { useNavigate } from "react-router-dom";

export const PersonInfoForm = ({
  setName,
  setSurname,
  setImage,
  setAbout_me,
  setEmail,
  setPhone_number,
  mainData,
  setMainData,
}) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .required()
      .min(2)
      .matches(/^[ა-ჰ]+$/),
    surname: yup
      .string()
      .required()
      .min(2)
      .matches(/^[ა-ჰ]+$/),
    image: yup.mixed().required(),
    about_me: yup.string(),
    email: yup
      .string()
      .required()
      .email()
      .matches(/@redberry.ge$/),
    phone_number: yup
      .string()
      .required()
      .matches(/^\+995 \d{3} \d{2} \d{2} \d{2}$/),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const formData = {
      name: data.name,
      surname: data.surname,
      image: URL.createObjectURL(data.image[0]),
      about_me: data.about_me,
      email: data.email,
      phone_number: data.phone_number,
    };
    setMainData(formData);
    navigate("/experience")
  };

  return (
    <form className="infoForm" onSubmit={handleSubmit(onSubmit)}>
      <label className="infoFormItem">
        <div className="infoDiv">
          სახელი
          <div className="infoDivRow">
            <input
              className={errors.name ? "errorBorder" : "greenBorder"}
              type="text"
              placeholder="ანზორ"
              {...register("name", {
                onChange: (e) => {
                  setName(e.target.value);
                },
              })}
            />
            {errors.name?.message && <img src={ErrorIcon}></img>}
          </div>
          <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
      </label>
      <label className="infoFormItem">
        <div className="infoDiv">
          გვარი
          <div className="infoDivRow">
            <input
              className={errors.name ? "errorBorder" : "greenBorder"}
              type="text"
              placeholder="მუმლაძე"
              {...register("surname", {
                onChange: (e) => {
                  setSurname(e.target.value);
                },
              })}
            />
            {errors.surname?.message && <img src={ErrorIcon}></img>}
          </div>
          <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
      </label>
      <label className="infoFormItem">
        <div className="infoDiv">
          პირადი ფოტოს ატვირთვა
          <div className="infoDivRow">
            <input
              className={errors.name ? "errorBorder" : "greenBorder"}
              type="file"
              {...register("image", {
                onChange: (e) => {
                  setImage(URL.createObjectURL(e.target.files[0]));
                },
              })}
            />
            {errors.image?.message && <img src={ErrorIcon}></img>}
          </div>
        </div>
      </label>
      <label className="infoFormItem">
        ჩემ შესახებ (არასავალდებულო)
        <input
          type="text"
          placeholder="ზოგადი ინფო შენ შესახებ"
          {...register("about_me", {
            onChange: (e) => {
              setAbout_me(e.target.value);
            },
          })}
        />
      </label>
      <label className="infoFormItem">
        <div className="infoDiv">
          ელ-ფოსტა
          <div className="infoDivRow">
            <input
              className={errors.name ? "errorBorder" : "greenBorder"}
              type="email"
              placeholder="anzori666@redberry.ge"
              {...register("email", {
                onChange: (e) => {
                  setEmail(e.target.value);
                },
              })}
            />
            {errors.email?.message && <img src={ErrorIcon}></img>}
          </div>
          <p className="hint">უნდა მთავრდებოდეს @redberry.ge - ით</p>
        </div>
      </label>
      <label className="infoFormItem">
        <div className="infoDiv">
          მობილურის ნომერი
          <div className="infoDivRow">
            <input
              className={errors.name ? "errorBorder" : "greenBorder"}
              type="text"
              placeholder="+995 551 12 34 56"
              {...register("phone_number", {
                onChange: (e) => {
                  setPhone_number(e.target.value);
                },
              })}
            />
            {errors.phone_number?.message && <img src={ErrorIcon}></img>}
          </div>
          <p className="hint">
            უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
          </p>
        </div>
      </label>
      <div className="infoFormItem">
        <input type="submit" value="შემდეგი"></input>
      </div>
    </form>
  );
};

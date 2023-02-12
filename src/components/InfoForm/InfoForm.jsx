import React from "react";
import { useEffect } from "react";
import "./InfoForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorIcon from "../../assets/Error.svg";
import GreenTick from "../../assets/GreenTick.svg";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

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
  image: yup.mixed(),
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

export const InfoForm = ({
  mainData,
  setMainData,
  infoValues,
  setInfoValues,
  img,
  setImg,
  apiData,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const getBase64FromUrl = async (url) => {
    const data = await fetch(url);
    const blob = await data.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result;
        resolve(base64data);
      };
    });
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const phone = data.phone_number.replace(/\s/g, "");
    const imageBase64 = await getBase64FromUrl(infoValues.image);
    setImg(imageBase64);
    const infoData = {
      name: data.name,
      surname: data.surname,
      image: dataURLtoFile(imageBase64, "image.png"),
      about_me: data.about_me,
      email: data.email,
      phone_number: phone,
    };
    setMainData({
      name: data.name,
      surname: data.surname,
      image: dataURLtoFile(imageBase64, "image.png"),
      about_me: data.about_me,
      email: data.email,
      phone_number: phone
    });
    navigate("/experience");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="infoGrid">
      <div className="infoGridItem">
        <div className="col">
          <label
            className={
              errors && errors.name?.message ? "label error" : "label success"
            }
          >
            სახელი
          </label>
          <div>
            <input
              placeholder="ანზორ"
              type="text"
              {...register("name", {
                onChange: (e) => {
                  setInfoValues((prev) => ({ ...prev, name: e.target.value }));
                },
              })}
            />
            {errors && errors.name?.message ? null : (
              <img className="greentick" src={GreenTick}></img>
            )}
          </div>
          <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
      </div>
      <div className="infoGridItem">
        <div className="col">
          <label
            className={
              errors && errors.surname?.message
                ? "label error"
                : "label success"
            }
          >
            გვარი
          </label>
          <div>
            <input
              placeholder="მუმლაძე"
              type="text"
              {...register("surname", {
                onChange: (e) => {
                  setInfoValues((prev) => ({
                    ...prev,
                    surname: e.target.value,
                  }));
                },
              })}
            />
            {errors && errors.surname?.message ? null : (
              <img className="greentick" src={GreenTick}></img>
            )}
          </div>
          <p className="hint">მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
      </div>
      <div className="infoGridItem">
        <div className="row">
          <label className="label custom-file-upload">
            ატვირთვა
            <input
              className="input-file"
              type="file"
              {...register("image", {
                onChange: (e) => {
                  setInfoValues((prev) => ({
                    ...prev,
                    image: URL.createObjectURL(e.target.files[0]),
                  }));
                },
              })}
            />
          </label>
        </div>
      </div>
      <div className="infoGridItem">
        <div className="col">
          <label className="label">ჩემ შესახებ(არასავალდებულო)</label>
          <div>
            <input
              className="about-me"
              placeholder="ზოგადი ინფო შენ შესახებ"
              type="text"
              {...register("about_me", {
                onChange: (e) => {
                  setInfoValues((prev) => ({
                    ...prev,
                    about_me: e.target.value,
                  }));
                },
              })}
            />
          </div>
        </div>
      </div>
      <div className="infoGridItem">
        <div className="col">
          <label
            className={
              errors && errors.email?.message ? "label error" : "label success"
            }
          >
            ელ.ფოსტა
          </label>
          <div>
            <input
              placeholder="anzor666@redberry.ge"
              type="text"
              {...register("email", {
                onChange: (e) => {
                  setInfoValues((prev) => ({ ...prev, email: e.target.value }));
                },
              })}
            />
            {errors && errors.email?.message ? null : (
              <img className="greentickFullWidth" src={GreenTick}></img>
            )}
          </div>
        </div>
      </div>
      <div className="infoGridItem">
        <div className="col">
          <label
            className={
              errors && errors.phone_number?.message
                ? "label error"
                : "label success"
            }
          >
            მობილურის ნომერი
          </label>
          <div>
            <input
              placeholder="+995 551 12 34 56"
              type="text"
              {...register("phone_number", {
                onChange: (e) => {
                  setInfoValues((prev) => ({
                    ...prev,
                    phone_number: e.target.value,
                  }));
                },
              })}
            />
            {errors && errors.phone_number?.message ? null : (
              <img className="greentickFullWidth" src={GreenTick}></img>
            )}
          </div>
          <p className="hint">
            უნდა აკმაყოფილებდეს ქართული მობილური ნომრის ფორმატს
          </p>
        </div>
      </div>
      <div className="infoGridItem">
        <button className="info-next">შემდეგი</button>
      </div>
    </form>
  );
};

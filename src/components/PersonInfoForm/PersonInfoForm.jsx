import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorIcon from "../../assets/Error.svg";
import * as yup from "yup";
import "./PersonInfoForm.css"

export const PersonInfoForm = () => {
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
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div className="infoDiv">
          სახელი
          <input type="text" placeholder="ანზორ" {...register("name")} />
          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
        {errors.name?.message && <img src={ErrorIcon}></img>}
      </label>
      <label>
        <div className="infoDiv">
          გვარი
          <input type="text" placeholder="მუმლაძე" {...register("surname")} />
          <p>მინიმუმ 2 ასო, ქართული ასოები</p>
        </div>
        {errors.surname?.message && <img src={ErrorIcon}></img>}
      </label>
      <label>
        <div className="infoDiv">
          პირადი ფოტოს ატვირთვა
          <input
            type="file"
            {...register("image", {
              onChange: (e) => {
                console.log(URL.createObjectURL(e.target.files[0]));
              },
            })}
          />
          {errors.image?.message && <img src={ErrorIcon}></img>}
        </div>
      </label>
      <label>
        ჩემ შესახებ (არასავალდებულო)
        <input
          type="text"
          placeholder="ზოგადი ინფო შენ შესახებ"
          {...register("about_me")}
        />
      </label>
      <label>
        <div className="infoDiv">
          ელ-ფოსტა
          <input
            type="email"
            placeholder="anzori666@redberry.ge"
            {...register("email")}
          />
          <p>უნდა მთავრდებოდეს @redberry.ge - ით</p>
        </div>
        {errors.email?.message && <img src={ErrorIcon}></img>}
      </label>
      <label>
        <div className="infoDiv">
          მობილურის ნომერი
          <input
            type="text"
            placeholder="+995 551 12 34 56"
            {...register("phone_number")}
          />
          <p>უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს</p>
        </div>
        {errors.phone_number?.message && <img src={ErrorIcon}></img>}
      </label>
      <input type="submit"></input>
    </form>
  );
};

import React from "react";
import { useForm } from "react-hook-form";

export const FormPersonInfo = () => {

  const {register, handleSubmit} = useForm();


  const onSubmit = () => {
    console.log("submit");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="input-row">
        <div>
          <label htmlFor="name">სახელი</label>
          <input
            placeholder="ანზორ"
            className="input-person"
            type="text"
            id="name"
            name="name"
          />
          <p className="p-text">მინიმუმ 2 ასო ქართული ასოებით</p>
        </div>
        <div>
          <label htmlFor="name">სახელი</label>
          <input
            placeholder="მუმლაძე"
            className="input-person"
            type="text"
            id="name"
            name="name"
          />
          <p className="p-text">მინიმუმ 2 ასო ქართული ასოებით</p>
        </div>
      </div>
      <div className="upload-photo">
        <h1>პირადი ფოტოს ატვირთვა</h1>
        <button>ატვირთვა</button>
      </div>
      <div className="aboutme">
        <label htmlFor="aboutme">ჩემს შესახებ (არასავალდებულო)</label>
        <input
          placeholder="ზოგადი ინფო შენს შესახებ"
          className="input-person"
          type="text"
          id="aboutme"
          name="aboutme"
        />
      </div>
      <div className="email">
        <label htmlFor="email">ელ.ფოსტა</label>
        <input placeholder="anzor666@redberry.com"></input>
      </div>
      <div className="phone-number">
        <label htmlFor="phone-number">ტელეფონი</label>
        <input placeholder="+995 551 12 34 56"></input>
      </div>
      <div className="personNextBtn">
        <button type="submit">შემდეგი</button>
      </div>
    </form>
  );
};

import React from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../../provider/todo_provider/todo_provider";
import { Add_User } from "../../provider/todo_provider/todo_types";
import { nanoid } from "nanoid";
import { TextInterface } from "../../components/card/card_wrappers";
import real from '../../assets/real.svg';

export const Home = () => {
  const { register, handleSubmit, reset } = useForm();
  const { dispatch, data } = React.useContext(TodoContext);

  const submit = (data) => {
    dispatch({ type: Add_User, value: { id: nanoid(), ...data } });
    reset();
  };

  return (
    <>
      <form className="form_div" onSubmit={handleSubmit(submit)}>
        <h1 className="real_madrid">WELCOME TO MADRID</h1>
        <div className="input">
          <input {...register("first_name")} type="text" />
        </div>
        <div className="btnBlock">
          <button className="send" type="submit">
            SUBMIT
          </button>
        </div>
        <h2 className="cr7">CRISTIANO <br /> RONALDO</h2>
        <img src={real} alt="img" />
      </form>

      <TextInterface />
    </>
  );
};

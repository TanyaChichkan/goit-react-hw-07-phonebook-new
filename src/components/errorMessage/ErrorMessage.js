import React from "react";
import Error from "../../pic/error.jpg";
import { text, wrapper, formButton } from "./ErrorMessage.module.css";

const ErrorMessage = ({ error, onclick }) => {
  return (
    <div className={wrapper}>
      <p className={text}>Something went wrong</p>
      <p className={text}>{error.message}</p>
      <img src={Error} alt="error picture" width="500" height="300" />
      <button type="button" onClick={onclick} className={formButton}>
        Try again
      </button>
    </div>
  );
};

export default ErrorMessage;

import React from "react";
import classes from "./Button.module.css";

const Button = ({ type, text }) => {
  return (
    <button type={type} className={`${classes.button} text-body`}>
      {text}
    </button>
  );
};

export default Button;

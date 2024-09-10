import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      className={`${classes.input} text-body`}
      placeholder={placeholder}
    />
  );
};

export default Input;

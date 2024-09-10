import React from "react";
import classes from "./Input.module.css";

const Input = ({ type, placeholder }) => {
  return (
    <div>
      <input
        type={type}
        className={`${classes.input} text-body`}
        placeholder={placeholder}
      />
      <span className={`${classes.errorText}`}>Sorry, invalid format here</span>
    </div>
  );
};

export default Input;

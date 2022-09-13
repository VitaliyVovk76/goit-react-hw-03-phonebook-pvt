import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ text, onClick, id, type }) => {
  return (
    <button className={s[id]} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

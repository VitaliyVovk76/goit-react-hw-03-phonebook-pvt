import React from "react";
import PropTypes from "prop-types";
import s from "./Title.module.css";

const Title = ({ text, type }) => {
  return <h2 className={s[type]}>{text}</h2>;
};

export default Title;

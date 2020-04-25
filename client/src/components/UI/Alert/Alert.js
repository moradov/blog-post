import React from "react";
import "./Alert.scss";
const Alert = ({ type, msg }) => {
  return <div className={type}>{msg}</div>;
};

export default Alert;

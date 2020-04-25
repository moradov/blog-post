import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SHOW_ALERT, HIDE_ALERT } from "../types";

const AlertState = props => {
  const initState = {
    showAlert: false,
    type: null,
    msg: null,
    time: null
  };
  const [state, dispatch] = useReducer(alertReducer, initState);
  const alert = (type, msg, time) => {
    dispatch({ type: SHOW_ALERT, payload: { type, msg } });

    setTimeout(() => {
      dispatch({ type: HIDE_ALERT });
    }, time);
  };
  return (
    <AlertContext.Provider
      value={{
        showAlert: state.showAlert,
        type: state.type,
        msg: state.msg,
        alert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;

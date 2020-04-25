import React, { useReducer } from "react";
import axios from "axios";
import userReducer from "./userReducer";
import UserContext from "./UserContext";
import setAuthToken from "../../utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  LOAD_ON
} from "../types";
const UserState = props => {
  const initState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: false,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(userReducer, initState);
  // Load User
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    try {
      const res = await axios.get("/api/auth");

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: AUTH_ERROR });
    }
  };

  const register = async dataFormat => {
    setLoadin();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post("/api/users", dataFormat, config);
      console.log(res);
      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      console.log(err);
      dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
    }
  };
  const searchControl = value => {
    dispatch({ type: "SEARCH_CONTROL", payload: value });
  };

  // Login User
  const log = async formData => {
    setLoadin();
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/auth", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  // set loading
  const setLoadin = () => dispatch({ type: LOAD_ON });

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        token: state.token,
        isAuth: state.isAuthenticated,
        showSearch: state.showSearch,
        isLoading: state.loading,
        error: state.error,
        searchControl,
        register,
        loadUser,
        log,
        logout,
        clearErrors
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;

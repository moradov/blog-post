import React, { useState, useContext, useEffect } from "react";
import "../SignUp/SignUp.scss";
import userContext from "../../../context/UserContext/UserContext";

const Login = ({ history }) => {
  //pull user context values
  const { log, isAuth } = useContext(userContext);

  // chek if the user is alerdy login
  useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth]);

  // login inputs state
  const [login, setLogin] = useState({
    email: null,
    password: null,
  });
  // distructring login inputs values
  const { email, password } = login;
  // inputs hundler => onChange
  const loginInputsChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  // submit the inputs values hundler
  const loginFormSubmit = (e) => {
    e.preventDefault();
    if (login.email && login.password) {
      log({ email, password });
    }
  };
  return (
    <div className='sign-in'>
      <form onSubmit={loginFormSubmit}>
        <h2>
          Sign <span>In</span>{" "}
        </h2>

        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='email'
            placeholder='Email'
            onChange={loginInputsChange}
            required
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            onChange={loginInputsChange}
            required
          />
        </div>
        <div className='input-group'>
          <input type='submit' className='btn' />
        </div>
      </form>
    </div>
  );
};

export default Login;

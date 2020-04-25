import React, { useState, useContext } from "react";
import "./SignUp.scss";
import userContext from "../../../context/UserContext/UserContext";
import alertContext from "../../../context/alert/alertContext";
const SignUp = ({ history }) => {
  //pull the context value
  const { register } = useContext(userContext);
  const { alert } = useContext(alertContext);

  // inputs Valus state
  const [signUp, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  // destructring state values
  const { name, email, password, password2 } = signUp;

  // onchange hundler
  const signUpInputsChange = (event) => {
    setSignUp({ ...signUp, [event.target.name]: event.target.value });
  };
  //onsubmit hundler
  const signUpFormSubmit = (e) => {
    e.preventDefault();
    if (!signUp.password || signUp.password !== signUp.password2) {
      // register({ name, email, password });
      alert("danger", "the password not conferm ", 3000);
    } else {
      alert("success", "login conferm", 3000);
      history.push("/");
    }
  };
  return (
    <div className='sign-up'>
      <form onSubmit={signUpFormSubmit}>
        <h2>
          Sign <span>Up</span>{" "}
        </h2>
        <div className='input-group'>
          <label htmlFor='name'>Name</label>
          <input
            name='name'
            type='text'
            placeholder='Name'
            onChange={signUpInputsChange}
            required
            value={name}
          />
        </div>
        <div className='input-group'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='email'
            placeholder='Email'
            onChange={signUpInputsChange}
            value={email}
            required
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            onChange={signUpInputsChange}
            minLength='6'
            value={password}
            required
          />
        </div>
        <div className='input-group'>
          <label htmlFor='password2'>Confirm Password</label>
          <input
            name='password2'
            type='password'
            placeholder='Confirm Password'
            onChange={signUpInputsChange}
            value={password2}
            minLength='6'
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

export default SignUp;

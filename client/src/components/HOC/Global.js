import React, { useEffect, useContext, Fragment } from "react";
import userContext from "../../context/UserContext/UserContext";
import postsContext from "../../context/posts/postsContext";
import alertContext from "../../context/alert/alertContext";
import Alert from "../../components/UI/Alert/Alert";

const Global = ({ children }) => {
  //pull values from the nedde context
  const { loadUser, token, error, clearErrors } = useContext(userContext);
  const { getPosts } = useContext(postsContext);
  const { type, msg, alert } = useContext(alertContext);
  // chek if the user authenticated
  useEffect(() => {
    if (token) {
      loadUser();
    }
    // eslint-disable-next-line
  }, [token]);
  // load post when the component loadin
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line
  }, []);
  // chek globaly if there is any Error
  useEffect(() => {
    if (error) {
      alert("danger", error, 3000);
      clearErrors();
    }
  }, [error]);

  return (
    <Fragment>
      <div>{children}</div>
      <Alert type={type} msg={msg} />
    </Fragment>
  );
};

export default Global;

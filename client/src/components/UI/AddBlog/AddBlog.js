import React from "react";
import { withRouter } from "react-router-dom";
import "./AddBlog.scss";
const AddBlog = ({ history }) => {
  // on click add post icon
  const clicked = () => history.push("/add");
  return (
    <div className='add-blog' onClick={clicked}>
      <i className='fas fa-pencil-alt'></i>
    </div>
  );
};

export default withRouter(AddBlog);

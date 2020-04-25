import React from "react";
import { withRouter } from "react-router-dom";
import PropsTypes from "prop-types";
import "./Post.scss";
const Post = ({ history, post: { id, title } }) => {
  // onclick on post should redirect to the single blog page
  const postClick = () => history.push(`/post/${id}`);

  return (
    <div className='post' onClick={postClick}>
      <img
        className='post-img'
        src='https://i.ibb.co/kmPYFTP/EFRa-QO0-Ws-AEvp-YZ.jpg'
        alt='tesvize'
      />
      <h2 className='post-title'>{title} </h2>
      <p className='post-desc'>
        this is some post desc for the main post and junck all then revele
      </p>
      <div className='post-info'>
        <span className='read-time'>
          {" "}
          <i className='fas fa-hourglass-half'></i> 2 min reading
        </span>

        <span className='likes'>
          {" "}
          <i className='fas fa-thumbs-up'></i> 200
        </span>
      </div>
    </div>
  );
};
Post.propsTypes = {
  post: PropsTypes.object.isRequired,
};
export default withRouter(Post);

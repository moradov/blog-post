import React from "react";
import "./WrittenBy.scss";
const WrittenBy = () => {
  return (
    <div className='post-author'>
      <h3>written by </h3>
      <div className='post-author-info'>
        <div className='imag'>
          <img src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50' />
        </div>
        <div className='info'>
          <p className='author-name'>Name</p>
          <p className='author-desc'>
            this is should by the user descreption in order to manage all
            contents by lags for dicore setd
          </p>
        </div>
      </div>
    </div>
  );
};

export default WrittenBy;

import React, { Fragment } from "react";

const ProfileUI = ({ editToggle }) => {
  return (
    <Fragment>
      <div className='cover'></div>
      <div className='user-profile'>
        <div className='user-profile-header'>
          <div className='profile-desc'>
            <div className='left'>
              <img
                className='user-img'
                src='https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'
              />
              ' <div className='user-name'>Name</div>'{" "}
              <div className='user-desc'>
                text and blanda run figo junk alpha der alti hugo and oder
                blabla
              </div>
              <div className='sub-date'>
                {" "}
                <i className='fas fa-calendar-alt'></i> Joined : august 2019
              </div>
            </div>
            <div className='right'>
              <button className='edit' onClick={editToggle}>
                edit <i className='fas fa-cog'></i>{" "}
              </button>
            </div>
          </div>
        </div>
        <div className='profile-content'>
          <h3>User Blogs</h3>
          <div className='user-posts'></div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileUI;

import React from "react";

const ProfileModel = ({ editToggle }) => {
  return (
    <div className='model'>
      <div className='edit-profile-sec'>
        <div className='top'>
          <div className='left'>
            <span className='close' onClick={editToggle}>
              X
            </span>
            <p>edit profile</p>
          </div>
          <div className='right'>
            <button className='save-btn'>save</button>
          </div>
        </div>
        <div className='main'>
          <div className='edit-img-profile'>
            <img />
          </div>
          <form>
            <div className='from-group'>
              <label htmlFor='name'>name</label>
              <input type='text' name='name' value='User Name' />
            </div>
            <div className='form-group'>
              <label htmlFor='bio'> Bio</label>
              <textarea name='bio' value='Some Bla Bla text'></textarea>
            </div>
            <div className='from-group'>
              <label htmlFor='link'>Link</label>
              <input type='text' name='link' value='http/link.com' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileModel;

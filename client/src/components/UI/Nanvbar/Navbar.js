import React, { useContext, useState, Fragment } from "react";
import "./Navbar.scss";
import userContext from "../../../context/UserContext/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  //pull user context => tchek if is auth to make the navbar responsive
  const { showSearch, searchControl, isAuth, logout } = useContext(userContext);
  // show UI state
  const [subMenuDisplay, setSub] = useState(false);

  // display navbar content for authorized users
  const searchClicked = () => {
    searchControl(!showSearch);
  };
  // on click on the menu btn showd toggle the content
  const menuClicked = () => {
    setSub(!subMenuDisplay);
  };
  //on click on the logout link
  const logoutHund = () => {
    logout();
  };
  // render the html depende if the user is auth
  return (
    <nav className='navbar'>
      <ul className='items'>
        <li>
          <Link to='/'>
            <i className='fas fa-home'></i>
          </Link>
        </li>
        {isAuth ? (
          <li>
            <Link to='/home'>
              <i className='fas fa-bell'></i>
            </Link>
          </li>
        ) : null}
        <li>
          <Link to='#'>
            <i className='fa fa-search' onClick={searchClicked}></i>
          </Link>
        </li>
        <li>
          <Link to='#'>
            <i className='fa fa-bars' onClick={menuClicked}></i>
          </Link>
        </li>
      </ul>
      {subMenuDisplay ? (
        <ul className='sub-nav' id='sub-nav'>
          {isAuth ? (
            <Fragment>
              <li>
                <Link to='/profile'>Profil</Link>
              </li>
              <li>
                <Link to='/help'>Help</Link>
              </li>
              <li>
                <Link to='/login' onClick={logoutHund}>
                  logout
                </Link>
              </li>
            </Fragment>
          ) : (
            <Fragment>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/help'>Help</Link>
              </li>
              <li>
                <Link to='/login'>login</Link>
              </li>
            </Fragment>
          )}
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;

import React, { useContext } from "react";
import Navbar from "../UI/Nanvbar/Navbar";
import Search from "../UI/Search/Search";
import userContext from "../../context/UserContext/UserContext";

const Header = () => {
  //pull context values
  const { showSearch } = useContext(userContext);

  return (
    <div className='header'>
      <Navbar />
      {showSearch ? <Search /> : null}
    </div>
  );
};

export default Header;

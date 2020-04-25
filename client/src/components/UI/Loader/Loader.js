import React, { Fragment } from "react";
import "./Loader.scss";
const Loader = ({ show }) => {
  return (
    <Fragment>
      {show ? (
        <div className='loader'>
          <span> loadin..... </span>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Loader;

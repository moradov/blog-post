import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
const Categorie = ({ history, categorie }) => {
  const clicked = () => history.push(`/categorie/${categorie}`);
  return (
    <div className='cat' onClick={clicked} key={categorie}>
      <div className='background'>
        <div className='hid-div'></div>
      </div>
      <h2>{categorie} </h2>
    </div>
  );
};
Categorie.propTypes = {
  categorie: PropTypes.string.isRequired,
};
export default withRouter(Categorie);

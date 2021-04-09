import React from 'react';
import PropTypes from 'prop-types';

const Cocktail = ({ cocktail }) => (
  <div>
    <h2>{cocktail.strDrink}</h2>
  </div>
);

Cocktail.propTypes = {
  cocktail: PropTypes.shape(
    { strDrink: PropTypes.string },
  ).isRequired,
};

export default Cocktail;

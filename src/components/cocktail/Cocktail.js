import React from 'react';
import PropTypes from 'prop-types';

const Cocktail = ({ cocktail }) => {
  console.log(cocktail);
  return (
    <div>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h2>{cocktail.strDrink}</h2>
    </div>
  );
};

Cocktail.propTypes = {
  cocktail: PropTypes.shape(
    {
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
    },
  ).isRequired,
};

export default Cocktail;

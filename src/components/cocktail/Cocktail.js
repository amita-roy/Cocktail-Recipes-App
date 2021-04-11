import React from 'react';
import PropTypes from 'prop-types';

import './Cocktail.css';

const Cocktail = ({ cocktail }) => (
  <div className="cocktail-component">
    <h2 className="cocktail-name">{cocktail.strDrink}</h2>

    <div className="recipe-content">
      <div className="cocktailImg-wrapper">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </div>
      <div className="right-content">Right</div>
    </div>
  </div>
);

Cocktail.propTypes = {
  cocktail: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }).isRequired,
};

export default Cocktail;

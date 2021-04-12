import React from 'react';
import PropTypes from 'prop-types';
import filteredList from './helper';

import './Cocktail.css';

const Cocktail = ({ cocktail }) => {
  const ingredients = filteredList(cocktail, 'strIngredient');
  const measurements = filteredList(cocktail, 'strMeasure');

  const recipeIngredients = () => measurements.map((qty, index) => (
    <p key={ingredients[index]}>
      <span className="qty">{`${qty} ${ingredients[index]}`}</span>
    </p>
  ));

  return (
    <div className="cocktail-component">
      <div className="cocktailImg-wrapper">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="overlay" />
      </div>
      <div className="recipe-content">
        <h2 className="cocktail-name">{cocktail.strDrink}</h2>
        <div className="tags">
          <span className="tag">{cocktail.strCategory}</span>
          <span className="tag">{cocktail.strAlcoholic}</span>
          <span className="tag">{cocktail.strGlass}</span>
        </div>
      </div>
      <div className="bottom-card">
        <div className="measures">
          <h2 className="label">Ingredients</h2>
          {recipeIngredients()}
        </div>
        <div className="instruction">
          <h2 className="label">Instructions</h2>
          <p>{cocktail.strInstructions}</p>
        </div>
      </div>
    </div>
  );
};

Cocktail.propTypes = {
  cocktail: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    strCategory: PropTypes.string,
    strAlcoholic: PropTypes.string,
    strGlass: PropTypes.string,
    strInstructions: PropTypes.string,
  }).isRequired,
};

export default Cocktail;

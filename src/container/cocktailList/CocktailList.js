import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions/cocktailsActions';

import './CocktailList.css';

class CocktailList extends PureComponent {
  componentDidMount() {
    const { loadCocktails } = this.props;
    loadCocktails();
  }

  render() {
    const { cocktails } = this.props;
    return (
      <div className="cocktailList">
        {cocktails && cocktails.map((cocktail) => (
          <div key={cocktail.idDrink} className="cocktailList-item">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
            <h4>{cocktail.strDrink}</h4>
          </div>
        ))}

      </div>
    );
  }
}

CocktailList.propTypes = {
  loadCocktails: PropTypes.func.isRequired,
  cocktails: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number }),
  ).isRequired,
};

const mapStateToProps = (state) => ({ cocktails: state.cocktails });

export default connect(mapStateToProps, Actions)(CocktailList);

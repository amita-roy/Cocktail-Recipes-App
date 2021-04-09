import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions/cocktailsActions';

import './CocktailList.css';
import Spinner from '../../components/spinner/Spinner';

class CocktailList extends PureComponent {
  componentDidMount() {
    const { loadCocktails } = this.props;
    loadCocktails();
  }

  handleClick = (cocktail) => {
    const { loadCocktail } = this.props;
    loadCocktail(cocktail);
  }

  render() {
    const { cocktails } = this.props;
    return (
      <div className="cocktailList">
        {cocktails.length ? (
          cocktails.map((cocktail) => (
            <Link
              to={`/cocktails/${cocktail.idDrink}`}
              key={cocktail.idDrink}
              className="cocktailList-item"
            >
              <img src={cocktail.strDrinkThumb} alt={cocktail.idDrink} />
              <h4>{cocktail.strDrink}</h4>
            </Link>
          ))) : <Spinner /> }
      </div>
    );
  }
}

CocktailList.propTypes = {
  loadCocktail: PropTypes.func.isRequired,
  loadCocktails: PropTypes.func.isRequired,
  cocktails: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
};

const mapStateToProps = (state) => ({ cocktails: state.cocktails });

export default connect(mapStateToProps, Actions)(CocktailList);

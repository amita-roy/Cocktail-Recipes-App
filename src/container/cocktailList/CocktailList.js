import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions/cocktailsActions';

class CocktailList extends PureComponent {
  componentDidMount() {
    const { loadCocktails } = this.props;
    loadCocktails();
  }

  render() {
    const { cocktails } = this.props;
    return (
      <div>
        {cocktails && cocktails.map((cocktail) => (
          <h4 key={cocktail.idDrink}>{cocktail.strDrink}</h4>))}
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

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../../actions/cocktailsActions';
import Cocktail from '../../components/cocktail/Cocktail';

import './CocktailPage.css';

class CocktailPage extends PureComponent {
  componentDidMount() {
    const { match, loadCocktail } = this.props;
    loadCocktail(match.params.id);
  }

  componentWillUnmount() {
    const { clearPreviousCocktail } = this.props;
    clearPreviousCocktail();
  }

  render() {
    const { cocktail } = this.props;
    return (
      <div className="cocktail-Recipe-page">
        <div className="cocktail-recipe">
          {cocktail && <Cocktail cocktail={cocktail} />}
          {/* <code><pre>{JSON.stringify(cocktail, null, 2)}</pre></code> */}
        </div>
      </div>
    );
  }
}

CocktailPage.propTypes = {
  clearPreviousCocktail: PropTypes.func.isRequired,
  loadCocktail: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,

  cocktail: PropTypes.shape({ strDrink: PropTypes.string }).isRequired,
};

const mapStateToProps = (state) => ({ cocktail: state.cocktail });

export default connect(mapStateToProps, Actions)(CocktailPage);

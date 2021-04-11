import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../../actions/cocktailsActions';
import Navigation from '../../components/navigation/Navigation';
import Cocktail from '../../components/cocktail/Cocktail';

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
      <div>
        <div className="header">
          <Navigation />
        </div>
        {cocktail && <Cocktail cocktail={cocktail && cocktail} />}

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

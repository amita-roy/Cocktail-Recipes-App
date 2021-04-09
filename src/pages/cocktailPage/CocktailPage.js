import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Actions from '../../actions/cocktailsActions';
import Cocktail from '../../components/cocktail/Cocktail';
import Spinner from '../../components/spinner/Spinner';

class CocktailPage extends PureComponent {
  componentDidMount() {
    const { match, loadCocktail } = this.props;
    loadCocktail(match.params.id);
  }

  render() {
    const { cocktail } = this.props;
    return (
      <div>
        {cocktail === undefined ? <Spinner /> : <Cocktail cocktail={cocktail && cocktail} />}

      </div>
    );
  }
}

CocktailPage.propTypes = {
  loadCocktail: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,

  cocktail: PropTypes.shape({ strDrink: PropTypes.string }).isRequired,
};

const mapStateToProps = (state) => ({ cocktail: state.cocktail });

export default connect(mapStateToProps, Actions)(CocktailPage);

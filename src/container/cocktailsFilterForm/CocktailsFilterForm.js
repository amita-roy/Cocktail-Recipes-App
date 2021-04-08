import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions/cocktailsActions';

class CocktailsFilterForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ query: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { loadFilteredCocktails } = this.props;
    const { query } = this.state;
    loadFilteredCocktails(query);
  }

  render() {
    const { query } = this.state;
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            name="query"
            placeholder="Search by ingredient"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

CocktailsFilterForm.propTypes = {
  loadFilteredCocktails: PropTypes.func.isRequired,
};

export default connect(null, Actions)(CocktailsFilterForm);

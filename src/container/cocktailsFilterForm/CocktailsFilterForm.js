import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Actions from '../../actions/cocktailsActions';

import './CocktailsFilterForm.css';

export class CocktailsFilterForm extends PureComponent {
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
    this.setState({ query: '' });
  }

  render() {
    const { query } = this.state;
    return (
      <div className="cocktailsFilterForm">
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            value={query}
            onChange={this.handleChange}
            name="query"
            placeholder="Filter by name"
            required
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

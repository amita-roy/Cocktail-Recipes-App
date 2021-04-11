import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({ btnName }) => (<button type="button" className="button">{btnName}</button>);

Button.defaultProps = {
  btnName: '',
};

Button.propTypes = {
  btnName: PropTypes.string,
};

export default Button;

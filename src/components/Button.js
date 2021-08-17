import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName } = props;
  return (
    <button type="button" name="button">{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;

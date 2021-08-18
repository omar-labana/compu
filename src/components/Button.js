import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { buttonName, clickHandler } = props;
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <button type="button" name="button" onClick={(e) => handleClick(buttonName, e)}>{buttonName}</button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;

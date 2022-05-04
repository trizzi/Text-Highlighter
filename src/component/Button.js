import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ color, text, onClick }) => {
  return (
    <button
      data-testid='click'
      style={{ backgroundColor: color }}
      onClick={onClick}
      className='btn'>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

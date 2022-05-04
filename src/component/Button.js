import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
  return (
    <button
      data-testid='click'
      onClick={onClick}
      className='btn'>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;

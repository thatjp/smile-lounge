import React from 'react';
import ButtonStyles from './styles';

const Button = ({ text, type }) => (
  <ButtonStyles>
    <button
      type={type}
      className="myButton"
    >
      {text}
    </button>
  </ButtonStyles>
);

export default Button;

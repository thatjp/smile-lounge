import React from 'react';
import Link from 'next/link';
import ButtonStyles from './styles';

const Button = ({ text, type }) => {
  if (type === 'link') {
    return (
      <ButtonStyles>
        <button
          className="myButton"
        >
          <Link href="/signup">
            <a>{text}</a>
          </Link>
        </button>
      </ButtonStyles>);
  }
  return (
    <ButtonStyles>
      <button
        className="myButton"
      >
        <Link href="/signup">
          <a>{text}</a>
        </Link>
      </button>
    </ButtonStyles>);
};

export default Button;

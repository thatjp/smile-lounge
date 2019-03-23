import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import TextBlockStyle from './styles';
import Button from '../Button/Button.js';

const TextBlock = ({ title, body }) => (
  <TextBlockStyle>
    <h1>{title}</h1>
    <p>{body}</p>
    <div className="container">
      <Link href="/signup">
        <a>
          <Button text="Sign Up Now!" />
        </a>
      </Link>
    </div>
  </TextBlockStyle>
);

TextBlock.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

TextBlock.defaultProps = {
  title: '',
  body: '',
};

export default TextBlock;

import React from 'react';
import Link from 'next/link';
import TextBlockStyle from './styles';

const TextBlock = () => (
  <TextBlockStyle>
    <h1>Conciege Alignment</h1>
    <p>Coming soon</p>
    <div className="container">
      <Link href="/about">
        <a>
          For more information
        </a>
      </Link>
    </div>
  </TextBlockStyle>
);

export default TextBlock;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import LeftNavStyles from './styles';


const Nav = () => (
  <LeftNavStyles>
    <Link href="/faq">
      <a>Learn</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </LeftNavStyles>
);

export default Nav;

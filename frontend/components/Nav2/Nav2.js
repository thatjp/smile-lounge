/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import NavStyle from './styles';


const Nav = () => (
  <NavStyle>
    <Link href="/faq">
      <a>Learn</a>
    </Link>
    <Link href="/services">
      <a>Shop</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </NavStyle>
);

export default Nav;

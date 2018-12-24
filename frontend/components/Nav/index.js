/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import NavStyle from './style';
import User from '../User';

const Nav = () => (
  <NavStyle>
    <User>
      {({ data: { me } }) => {
        if (me) {
          return <p>{me.name}</p>;
        }
        return null;
      }}
    </User>
    <Link href="/cart">
      <a>Cart</a>
    </Link>
    <Link href="/profile">
      <a>Account</a>
    </Link>
    <Link href="/signup">
      <a>signup</a>
    </Link>
  </NavStyle>
);

export default Nav;

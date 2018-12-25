/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import NavStyle from './style';
import User from '../User';
import Signout from '../Signout';

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyle>
        <Link href="/signup">
          <a>signup</a>
        </Link>
        {me && (
        <>
          <Link href="/profile">
            <a>Account</a>
          </Link>

          <Link href="/cart">
            <a>Cart</a>
          </Link>

          <Link href="/signup">
            <a>Sign Out</a>
          </Link>
          <Signout />
        </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        )}
      </NavStyle>
    )}
  </User>
);

export default Nav;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import NavStyle from './styles';
import User from '../User';
import Signout from '../Signout';


const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyle>
        {me && (
        <>
          <Link href="/profile">
            <a>Account</a>
          </Link>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
          <Signout />
        </>
        )}
        {!me && (
          <>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
            <Link href="/signup">
              <a>Sign Up</a>
            </Link>
          </>
        )}
      </NavStyle>
    )}
  </User>
);

export default Nav;

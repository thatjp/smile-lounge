/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import RightNavStyles from './styles';
import User from '../User/User';
import Signout from '../Signout/Signout';
import Button from '../Button/Button';


const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <RightNavStyles>
        {me && (
        <>
          <Link href="/profile">
            <a>Account</a>
          </Link>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
          <Link href="/services">
            <a>Services</a>
          </Link>
          <Signout />
        </>
        )}
        {!me && (
          <>
            {/* <Link href="/signin">
              <a>Log In</a>
            </Link> */}
            <Button text="Sign Up" type="link" />
          </>
        )}
      </RightNavStyles>
    )}
  </User>
);

export default Nav;

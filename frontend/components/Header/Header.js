
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';
import Nav from '../Nav/Nav';

Router.onRouteChangeStart = () => {
  console.log('onRouteChangeStart');
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  console.log('onRouteChangeComplete');
  NProgress.done();
};
Router.onRouteChangeError = () => {
  console.log('onRouteChangeError');
  NProgress.done();
};

const HeaderNav = styled.div`
  display: inline-block;
  float: ${props => (props.nav ? 'right' : null)};
`;

const Header = () => (
  <div>
    <div className="bar">
      <HeaderNav>
        <Link href="/">
          <a>Smile Lounge</a>
        </Link>
      </HeaderNav>
      <HeaderNav nav>
        <Nav />
      </HeaderNav>
    </div>
    {/*
    TODO
    <div>
      Cart
    </div>
    */}
  </div>
);

export default Header;

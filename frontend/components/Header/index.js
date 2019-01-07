
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import HeaderStyles from './styles';
import Nav from '../Nav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <div className="bar">
    <HeaderStyles>
      <Link href="/">
        <a>
          <img src="../static/assets/SmileLounge-300.png" alt="Smile House" />
        </a>
      </Link>
      <div className="navigation">
        <Nav />
      </div>
    </HeaderStyles>
  </div>
);

export default Header;


import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import HeaderStyles from './styles';
import Nav from '../Nav';
import Nav2 from '../Nav2';

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
      <div className="navigation">
        <Nav2 />
      </div>
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

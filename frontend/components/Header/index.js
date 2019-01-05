
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import NavStyles from './styles';
import Nav from '../Nav';

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

const Header = () => (
  <div>
    <div className="bar">
      <NavStyles>
        <Link href="/">
          <a>
            <img src="../static/assets/SmileLounge-300.png" alt="Smile House" />
          </a>
        </Link>
      </NavStyles>
      <NavStyles nav>
        <Nav />
      </NavStyles>
    </div>
  </div>
);

export default Header;

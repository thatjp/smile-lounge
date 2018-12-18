
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
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

const Header = () => (
  <div>
    <div className="bar">
      <div>
        <Link href="/">
          <a>Smile Lounge</a>
        </Link>
      </div>
      <Nav />
    </div>
    <div>
      Cart
    </div>
  </div>
);

export default Header;

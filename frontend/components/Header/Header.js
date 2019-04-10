
import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import HeaderStyles from './styles';
import RightNav from '../RightNav/RightNav';
import LeftNav from '../LeftNav/LeftNav';

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = ({ color }) => (
  <div className="bar">
    <HeaderStyles scrollColor={color}>
      <div className="navigation">
        <LeftNav />
      </div>
      <Link href="/">
        <a>
          <img src="../static/assets/SmileLounge-300.png" alt="Smile House" />
        </a>
      </Link>
      <div className="navigation">
        <RightNav />
      </div>
    </HeaderStyles>
  </div>
);

export default Header;

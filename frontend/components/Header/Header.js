
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
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
      <div className="navigation">
        <Link href="/">
          <a>
            <img src="../static/assets/SmileLounge-300.png" alt="Smile House" />
          </a>
        </Link>
      </div>
      <div className="navigation">
        <RightNav />
      </div>
    </HeaderStyles>
  </div>
);

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Header;

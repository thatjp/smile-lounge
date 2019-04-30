
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Router from 'next/router';
import NProgress from 'nprogress';
import { isMobile } from 'react-device-detect';
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

const renderRightNav = () => {
  if (isMobile) {
    return (
      // <div className="navigation">
      //   <img className="menu-hamburger" src="../static/icons/hamburger-menu.png" alt="Smile House" />
      // </div>
      <div>
        
      </div>
    );
  }
  return (
    <div className="navigation">
      <RightNav />
    </div>
  );
};

const Header = ({ color }) => (
  <div className="bar">
    <HeaderStyles scrollColor={color}>
      <div className="navigation">
        { !isMobile && (
          <LeftNav />
        )}
      </div>
      <div className="navigation">
        <Link href="/">
          <a>
            <img src="../static/assets/SmileLounge-300.png" alt="Smile House" />
          </a>
        </Link>
      </div>
      <div className="navigation">
        {renderRightNav()}
      </div>
    </HeaderStyles>
  </div>
);

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Header;

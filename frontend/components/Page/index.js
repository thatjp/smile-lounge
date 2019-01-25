/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../Header';
import Meta from '../Meta';
import Footer from '../Footer';
import {
  theme,
  StyledPage,
  Inner,
} from './styles';

class Page extends Component {
  componentDidMount() {
    (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ey2yvrh1';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

    window.Intercom('boot', {
      app_id: 'ey2yvrh1',
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner homepage="100%">
            { children }
          </Inner>
          <Footer />
        </StyledPage>
      </ThemeProvider>
    );
  }
}

Page.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Page;

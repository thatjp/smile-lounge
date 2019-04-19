/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';
import {
  theme,
  StyledPage,
  Inner,
} from './styles';

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'transparent',
    };
  }

  componentDidMount() {
    /*--------------------------------------------------
      Below is the code for https://www.intercom.com/
    --------------------------------------------------*/
    (function () { const w = window; const ic = w.Intercom; if (typeof ic === 'function') { ic('reattach_activator'); ic('update', w.intercomSettings); } else { const d = document; var i = function () { i.c(arguments); }; i.q = []; i.c = function (args) { i.q.push(args); }; w.Intercom = i; const l = function () { const s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/ey2yvrh1'; const x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); }; if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } }());

    window.Intercom('boot', {
      app_id: 'ey2yvrh1',
    });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > 1) {
      this.setState({ color: '#FFD7B9' });
    } else {
      this.setState({ color: 'transparent' });
    }
  }

  render() {
    const { children } = this.props;
    const { color } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header color={color} />
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

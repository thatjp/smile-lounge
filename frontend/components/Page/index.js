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

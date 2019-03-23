import React, { Component } from 'react';
import PageSection from '../PageSection';
import BannerContainer from '../BannerContainer/BannerContainer';
import { HomePageStyles, HomePageInnerStyle } from './styles';

class HomePage extends Component {
  render() {
    return (
      <HomePageStyles>
        <BannerContainer />
        <HomePageInnerStyle>
          <PageSection />
        </HomePageInnerStyle>
      </HomePageStyles>
    );
  }
}

export default HomePage;

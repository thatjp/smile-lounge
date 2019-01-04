import React, { Component } from 'react';
import BannerContainer from '../BannerContainer';
import PageSection from '../PageSection';
import HomePageStyles from './styles';

class HomePage extends Component {
  render() {
    return (
      <HomePageStyles>
        <PageSection />
      </HomePageStyles>
    );
  }
}

export default HomePage;

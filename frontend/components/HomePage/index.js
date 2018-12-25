import React, { Component } from 'react';
import ImageContainer from '../ImageContainer';
import PageSection from '../PageSection';

class HomePage extends Component {
  render() {
    return (
      <div>
        <ImageContainer/>
        <PageSection />
      </div>
    );
  }
}

export default HomePage;

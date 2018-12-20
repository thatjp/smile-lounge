import React, { Component } from 'react';
import ImageContainer from '../ImageContainer';
import PageSection from '../PageSection';
import Footer from '../Footer';

class HomePage extends Component {
  render() {
    return (
      <div>
        <ImageContainer/>
        <PageSection />
        <Footer />
      </div>
    );
  }
}

export default HomePage;

import React from 'react';
import BannerContainerStyles from './styles';
import TextBlock from '../TextBlock';

const BannerContainer = () => (
  <BannerContainerStyles>
    <div className="container">
      <img src="../static/assets/banner-smile-1.png" alt="Smile House" />
      <TextBlock />
    </div>
  </BannerContainerStyles>
);

export default BannerContainer;

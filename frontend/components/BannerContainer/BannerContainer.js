import React from 'react';
import BannerContainerStyles from './styles';
import TextBlock from '../TextBlock/TextBlock';

const title = 'Give your smile the concierge treatment';

const body = 'Straighten your teeth with our custom-designed invisible aligners. Under the supervision of an Orthodontist from start to finish.';

const BannerContainer = () => (
  <BannerContainerStyles>
    <div className="content-container">
      <img src="../static/assets/banner-headtilt.jpg" alt="Smile House" />
    </div>
    <TextBlock
      title={title}
      body={body}
    />
  </BannerContainerStyles>
);

export default BannerContainer;

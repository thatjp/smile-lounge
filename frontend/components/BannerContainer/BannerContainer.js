import React from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import BannerContainerStyles from './styles';

const title = 'Give your smile the concierge treatment';

const body = 'Straighten your teeth with our custom-designed invisible aligners. Under the supervision of an Orthodontist from start to finish.';

const buttonText = 'sign up for updates';

const BannerContainer = () => (
  <BannerContainerStyles>
    <div className="image-container">
      <img src="../static/assets/banner-main.png" alt="Smile House" />
    </div>
    <div className="banner-text">
      <h2>{title}</h2>
      <p>{body}</p>
      <div className="container">
        <Link href="/signup">
          <a>
            <Button text={buttonText.toUpperCase()} />
          </a>
        </Link>
      </div>
    </div>
  </BannerContainerStyles>
);

export default BannerContainer;

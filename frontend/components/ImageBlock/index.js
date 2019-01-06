import React from 'react';
import ImageBlockStyles from './styles';

const ImageBlock = () => (
  <ImageBlockStyles>
    <div className="container">
      <img src="../static/assets/product-1.png" alt="aligners" />
      <div className="content">
        <h2 className="title__image-content-title">
          Some Title
        </h2>
        <p className="paragraph__image-content-description">
          some Text
        </p>
      </div>
    </div>
    <div className="container">
      <img src="../static/assets/product-1.png" alt="aligners" />
      <div className="content">
        <h2 className="title__image-content-title">
          Some Title
        </h2>
        <p className="paragraph__image-content-description">
          some Text
        </p>
      </div>
    </div>
    <div className="container">
      <img src="../static/assets/product-1.png" alt="aligners" />
      <div className="content">
        <h2 className="title__image-content-title">
          Some Title
        </h2>
        <p className="paragraph__image-content-description">
          some Text
        </p>
      </div>
    </div>
  </ImageBlockStyles>
);

export default ImageBlock;

import React from 'react';
import ImageBlockStyles from './styles';

const ImageBlock = () => (
  <ImageBlockStyles>
    <div>
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
    <div className="content">
      <img src="../static/assets/laptop.png" alt="Hard Work" />
      <h2>Some Title</h2>
      <p>some Text</p>
    </div>
    <div>
      <img src="../static/assets/calender.png" alt="aligners" />
      <h2>Some Title</h2>
      <p>some Text</p>
    </div>
  </ImageBlockStyles>
);

export default ImageBlock;

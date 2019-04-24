import React from 'react';
import PropTypes from 'prop-types';
import ImageStyles from './styles';

const Image = ({ imgPath }) => (
  <ImageStyles>
    <img src={`../${imgPath}`} alt="Smile House" />
  </ImageStyles>
);

export default Image;

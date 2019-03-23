import React from 'react';
import PropTypes from 'prop-types';
import ImageBlock from '../ImageBlock/ImageBlock';
import PageSectionStyle from './styles';

const PageSection = ({ title, body, ...props }) => (
  <PageSectionStyle>
    <h2>
      {title}
    </h2>
    <p>{body}</p>
  </PageSectionStyle>
);

PageSection.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

PageSection.defaultProps = {
  title: '',
  body: '',
};

export default PageSection;

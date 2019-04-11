import React from 'react';
import PropTypes from 'prop-types';
import Image1 from '../Image1/Image1';
import PageSectionStyle from './styles';

const PageSection = ({
  title, body, type, color, textColor,
}) => {
  switch (type) {
    case 'text':
      return (
        <PageSectionStyle
          color={color}
        >
          <div className="page-section-text">
            <h2 textColor={textColor}>
              {title}
            </h2>
            <p textColor={textColor}>
              {body}
            </p>
          </div>
        </PageSectionStyle>
      );
    case 'text/image':
      return (
        <PageSectionStyle color={color}>
          <div className="page-section-container">
            <div className="page-section-text">
              <h2 textColor={textColor}>
                {title}
              </h2>
              <p textColor={textColor}>
                {body}
              </p>
            </div>
            <div className="page-section-image">
              <Image1 />
            </div>
          </div>
        </PageSectionStyle>
      );
    default:
      break;
  }
  return null;
};

PageSection.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string,
  color: PropTypes.string,
  body: PropTypes.string,
  textColor: PropTypes.string,
};

PageSection.defaultProps = {
  title: '',
  body: '',
  color: '',
  textColor: '',
};

export default PageSection;

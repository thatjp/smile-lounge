import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import Image from '../Image/Image';
import PageSectionStyle from './styles';

const PageSection = ({
  title, body, type, color, textColor, textSide, imgPath,
}) => {
  switch (type) {
    case 'text':
      return (
        <PageSectionStyle
          color={color}
        >
          <div className="page-section-text">
            <h3 textColor={textColor}>
              {title}
            </h3>
            <p textColor={textColor}>
              {body}
            </p>
          </div>
        </PageSectionStyle>
      );
    case 'text/image': {
      if (textSide === 'left') {
        return (
          <PageSectionStyle color={color}>
            <div className="page-section-container-picture">
              <div className="page-section-text-picture">
                <h2 textColor={textColor}>
                  {title}
                </h2>
                <p textColor={textColor}>
                  {body}
                </p>
              </div>
              {!isMobile
                && (
                <div className="page-section-image">
                  <Image imgPath={imgPath} />
                </div>
                )
              }
            </div>
          </PageSectionStyle>
        );
      }
      return (
        <PageSectionStyle color={color}>
          <div className="page-section-container-picture">
            {!isMobile
              && (
              <div className="page-section-image right">
                <Image imgPath={imgPath} />
              </div>
              )
            }
            <div className="page-section-text-picture">
              <h2 textColor={textColor}>
                {title}
              </h2>
              <p textColor={textColor}>
                {body}
              </p>
            </div>
          </div>
        </PageSectionStyle>
      );
    }
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
  textSide: PropTypes.string,
  textColor: PropTypes.string,
};

PageSection.defaultProps = {
  title: '',
  body: '',
  color: '',
  textColor: '',
  textSide: '',
};

export default PageSection;

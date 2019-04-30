import React from 'react';
import BannerContainer from '../BannerContainer/BannerContainer';
import { HomePageStyles, HomePageInnerStyle } from './styles';
import PageSection from '../PageSection/PageSection';
import pageSectionsText from './hompageText';

const HomePage = () => (
  <HomePageStyles>
    <BannerContainer />
    <HomePageInnerStyle>
      {
        pageSectionsText.map(section => (
          <PageSection
            textSide={section.side}
            key={section.id}
            color={section.backgroundColor}
            textColor={section.textColor}
            type={section.type}
            title={section.title}
            body={section.body}
            imgPath={section.imgPath}
          />))
      }
    </HomePageInnerStyle>
  </HomePageStyles>
);

export default HomePage;

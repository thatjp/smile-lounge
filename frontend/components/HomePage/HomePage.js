import React from 'react';
import PageSection from '../PageSection/PageSection';
import BannerContainer from '../BannerContainer/BannerContainer';
import { HomePageStyles, HomePageInnerStyle } from './styles';

import { pageSectionsText } from './hompageText';

const HomePage = () => (
  <HomePageStyles>
    <BannerContainer />
    <HomePageInnerStyle>
      {pageSectionsText.map(pageSection => (
        <PageSection
          key={pageSection.id}
          color={pageSection.backgroundColor}
          textColor={pageSection.textColor}
          type={pageSection.type}
          title={pageSection.title}
          body={pageSection.body}
        />
      ))}
    </HomePageInnerStyle>
  </HomePageStyles>
);

export default HomePage;

import React from 'react';
import BannerContainer from '../BannerContainer/BannerContainer';
// import Carosel from '../Carosel/Carosel';
import { HomePageStyles, HomePageInnerStyle } from './styles';
import PageSection from '../PageSection/PageSection';

import pageSectionsText from './hompageText';

const HomePage = () => (
  <HomePageStyles>
    <BannerContainer />
    <HomePageInnerStyle>
      {/* <Carosel sections={pageSectionsText} /> */}
      {
        pageSectionsText.map((section) => {
          return (
            <PageSection
              textSide={section.side}
              key={section.id}
              color={section.backgroundColor}
              textColor={section.textColor}
              type={section.type}
              title={section.title}
              body={section.body}
            />
          );
        })
      }
    </HomePageInnerStyle>
  </HomePageStyles>
);

export default HomePage;

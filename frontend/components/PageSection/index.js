import React from 'react';
import ImageBlock from '../ImageBlock';
import PageSectionStyle from './styles';

const PageSection = () => (
  <PageSectionStyle>
    <h2>
      How It Works
    </h2>
    <ImageBlock />
    <h2>
      Why We Are Better
    </h2>
    <ImageBlock />
  </PageSectionStyle>
);

export default PageSection;

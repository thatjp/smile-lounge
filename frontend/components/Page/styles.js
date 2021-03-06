import styled, { injectGlobal } from 'styled-components';

const theme = {
  red: '#ff0000',
  black: '#393939',
  grey: '#3A3A3A',
  peach: '#FFEAD9',
  coral: '#F5FFF4',
  offWhite: '#f0f6f4',
  aqua: '#f0f6f4',
  lightgrey: '#F0F64F',
  darkGreen: '#002A27',
  maxWidth: '100%',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  background: ${props => props.theme.peach};
  padding: 109px 0px;
  flex: 1;

  @media (max-width: 700px) {
    padding: 80px 0px;
    
  }
`;

const Banner = styled.div`
  max-width: 100%;
`;

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'WorkSans-Light';
    src: url('/static/fonts/WorkSans-Light.ttf')
    format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'WorkSans-Regular';
    src: url('/static/fonts/WorkSans-Regular.ttf')
    format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'WorkSans-Medium';
    src: url('../static/fonts/WorkSans-Medium.ttf')
    format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'WorkSans-Bold';
    src: url('../static/fonts/WorkSans-Bold.ttf')
    format('woff');
    font-weight: normal;
    font-style: bold;
  }
  @font-face {
    font-family: 'Cormorant-Italic';
    src: url('../static/fonts/Cormorant-Italic.ttf')
    format('woff');
    font-weight: normal;
    font-style: bold;
  }
  @font-face {
    font-family: 'Cormorant-Regular';
    src: url('../static/fonts/Cormorant-Regular.ttf')
    format('woff');
    font-weight: normal;
    font-style: bold;
  }
  html, body {
    box-sizing: border-box;
    font-size: 10px;
    margin: 0;
    padding: 0;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'WorkSans-Regular';
    display: flex;
    flex-direction: column;
  }
  a {    
    text-decoration: none;
    color: ${theme.black};
  }
  ul {
    list-style-type: none;
    margin: none;
  }
  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
`;

export {
  theme,
  Inner,
  StyledPage,
  Banner,
};

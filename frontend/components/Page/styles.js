import styled, { injectGlobal } from 'styled-components';

const theme = {
  red: '#ff0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1500px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  height: 100%;
  position: relative;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.homepage || props.theme.maxWidth};
  margin: auto;
`;

const Banner = styled.div`
  max-width: 100%;
  margin: 0 auto;
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
  html, body {
    box-sizing: border-box;
    font-size: 10px;
    margin: 0;
    padding: 0;
    height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'WorkSans-Light';
  }
  a {    
    text-decoration: none;
    color: ${theme.black};
  }
  ul {
    list-style-type: none;
  }
`;

export {
  theme,
  Inner,
  StyledPage,
  Banner,
};

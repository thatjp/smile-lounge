import styled, { injectGlobal } from 'styled-components';

const theme = {
  red: '#ff0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offwhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  @font-face {
    font-family: 'WorkSans-Light';
    src: url('/static/fonts/WorkSans-Light.ttf')
    format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'WorkSans-Medium';
    src: url('/static/fonts/WorkSans-Medium.ttf')
    format('ttf');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'WorkSans-Bold';
    src: url('/static/fonts/WorkSans-Bold.ttf')
    format('ttf');
    font-weight: normal;
    font-style: bold;
  }
  @font-face {
    font-family: 'WorkSans-Light';
    src: url('/static/fonts/WorkSans-Light.ttf')
    format('ttf');
    font-weight: lighter;
    font-style: bold;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'WorkSans-Light';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
    line-height: 2;
  }
  ul {
    list-style-type: none;
  }
`;


export { theme, Inner, StyledPage };

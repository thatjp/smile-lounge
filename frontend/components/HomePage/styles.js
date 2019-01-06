import styled from 'styled-components';

const HomePageStyles = styled.div`
  height: 1500px;
`;

const HomePageInnerStyle = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export { HomePageStyles, HomePageInnerStyle  };

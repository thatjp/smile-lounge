import styled from 'styled-components';

const FAQStyles = styled.div`
  max-width: 70%;
  margin: 0 auto;
  div {
    border-top: 2px solid ${props => props.theme.black}
  }
  h1 {
    margin: 0;
  }
`;

export default FAQStyles;

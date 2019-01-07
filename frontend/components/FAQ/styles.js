import styled from 'styled-components';

const FAQStyles = styled.div`
  max-width: 70%;
  margin: 0 auto 30px;
  div {
    border-top: 1px solid ${props => props.theme.lightgrey}
  }
`;

export default FAQStyles;

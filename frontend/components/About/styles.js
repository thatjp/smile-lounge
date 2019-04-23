import styled from 'styled-components';

const AboutPageStyles = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 300px;
  text-align: center;
  min-height: 60vh;
  h2 {
    font-size: 30px;
  }
  p {
    font-size: 20px;
  }
  @media (max-width: 700px) {
    padding: 20px 30px;
  }
`;

export default AboutPageStyles;

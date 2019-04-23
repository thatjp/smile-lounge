import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: ${props => props.theme.peach};
  padding: 50px;
  
  @media (max-width: 700px) {
    justify-content: left;
    padding: 0px;
  }
  .paragraph--footer{
    font-size: 14px;
  }
  li {
    width: 2vw;
  }
`;

export default FooterStyle;

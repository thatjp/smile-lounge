import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: ${props => props.theme.peach};
  /* height: 300px; */
  padding:0px 50px;
  flex-shrink: 0;
  @media (max-width: 700px) {
    justify-content: left;
    padding: 0px;
  }
  .paragraph--footer{
    font-size: 14px;
  }
  li {
    width: 200px
  }
`;

export default FooterStyle;

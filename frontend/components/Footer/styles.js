import styled from 'styled-components';

const FooterStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  border-top: 1px solid ${props => props.theme.lightgrey};
  height: 300px;
  padding:0px 50px;
  .paragraph--footer{
    font-size: 14px;
  }
  li {
    width: 200px
  }
`;

export default FooterStyle;

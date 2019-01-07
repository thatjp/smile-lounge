import styled from 'styled-components';

const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  float: ${props => (props.nav ? 'right' : null)};
  padding: 0px 200px;
  img {
    width: 11vw;
    padding: 1vw;
  }
  .navigation {
    display: inline-block;
    align-self: center;
  }
  @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
      img {
        width: 40vw;
        padding: 1vw;
      }
    }
`;

export default HeaderStyles;

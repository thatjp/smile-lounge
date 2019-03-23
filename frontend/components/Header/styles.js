import styled from 'styled-components';

const HeaderStyles = styled.header`
  display: flex;
  position: fixed;
  background: transparent;
  justify-content: space-between;
  float: ${props => (props.nav ? 'right' : null)};
  padding: 0px 60px;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;

  img {
    width: 200px;
    padding: 20px;
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

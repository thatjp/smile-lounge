import styled from 'styled-components';

const NavStyles = styled.div`
  display: inline-block;
  float: ${props => (props.nav ? 'right' : null)};
  padding: 0px 200px;
  img {
    width: 22rem;
    padding: 15px
  }
  @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
`;

export default NavStyles;

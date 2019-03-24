import styled from 'styled-components';

const BannerContainerStyles = styled.div`
  position: relative;
  border-bottom: solid 2px ${props => props.theme.black};
  .container {
    position: relative;
    text-align: center;
  }
  img {
    display: block;
    width: 80%;
  }
`;

export default BannerContainerStyles;

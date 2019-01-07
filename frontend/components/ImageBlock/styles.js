import styled from 'styled-components';

const ImageBlockStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 700px) {
      display: block;
    }
  .container {
    width: 30%;
    @media (max-width: 700px) {
      width: 100%;
    }
  }
  .content {
    width: 50%;
    margin: 0 auto;
  }
  .title__image-content-title {
    
  }
  img {
    max-width: 50%;
    @media (max-width: 700px) {
      max-width: 50%;
    }
  }
`;

export default ImageBlockStyles;

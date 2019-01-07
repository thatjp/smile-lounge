import styled from 'styled-components';

const ImageBlockStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  .container {
    width: 30%;
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

import styled from 'styled-components';

const ImageBlockStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  .container {
    width: 30%;
  }
  .content {    
    border: 1px solid green;
    width: 50%
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

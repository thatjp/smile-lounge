import styled from 'styled-components';

const ImageBlockStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  .content {
    padding: 20px;
    border: 1px solid green;
  }
  .title__image-content-title {
    
  }
  img {
    max-width: 30rem;
    width: 100%;
    margin: 20px;
  }
`;

export default ImageBlockStyles;

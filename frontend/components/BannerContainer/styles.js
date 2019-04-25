import styled from 'styled-components';

const BannerContainerStyles = styled.div`
  position: relative;
  border-bottom: solid 2px ${props => props.theme.black};

  .banner-text {
    position: absolute;
    width: 30%;
    text-align: left;
    top: 5vw;
    left: 90px;

    h2 {
      font-family: 'Cormorant-Regular';
      font-size: 4.5vw;
      line-height: 4.5vw;
      color: ${props => props.theme.black};
      padding: 30px 0px;
    }

    p {
      width: 80%;
      font-size: 1vw;
      color: ${props => props.theme.black}
    }

    .container {
      display: inline-block;
      margin: 30px 0px;
      text-align: center;
    }
  }

  .image-container {
    img {
      margin-left: 400px;
      display: block;
      width: 70%;
    }
  }

  @media (max-width: 700px) {
    border-bottom: solid 1px ${props => props.theme.black};
    
    .banner-text {
      position: absolute;
      width: 50%;
      text-align: left;
      top: 0vw;
      left: 20px;

      h2 {
        padding: 30px 0px 10px 0px;
      }

      p {
        width: 80%;
        font-size: 2vw;
        color: ${props => props.theme.black}
      }
      
      .container {
        display: inline-block;
        margin: 15px 0px;
        text-align: center;
      }
    }
    .image-container {
      img {
        margin-left: 0px;
        display: block;
        width: 100%;
      }
    }
  }
`;

export default BannerContainerStyles;

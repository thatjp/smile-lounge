import styled from 'styled-components';

const PageSectionStyles = styled.section`
  background-color: ${(props) => {
    switch (props.color) {
      case 'offWhite':
        return props.theme.offWhite;
      case 'coral':
        return props.theme.coral;
      case 'aqua':
        return props.theme.aqua;
      case 'peach':
        return props.theme.peach;
      case 'darkGreen':
        return props.theme.darkGreen;
      default:
        break;
    }
    return null;
  }};
  border-bottom: 2px solid ${props => props.theme.black};

  .page-section-container {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }

  .page-section-container-picture{
    display: flex;
    flex-direction: row;
    max-width: 1500px;
    margin: 0 auto;
  }
  
  .page-section-text{
    max-width: 80%;
    margin: auto;
    padding: 90px;
    text-align: center;
    h3 {
      font-size: 1.5vw;
      text-align: center;
      font-family: Cormorant-Italic;
      color: grey;
      margin: 0px;      
    }
    p {
      font-size: 1.5vw;
      margin: 0px;
      color: ${props => (props.textColor === 'offWhite' ? props.theme.offWhite : props.theme.black)};
    }
  }

  .page-section-text-picture{
    max-width: 50%;
    margin: auto;
    padding: 90px;
    text-align: left;
    h2 {
      font-size: 2.4vw;
      text-align: left;
      font-family: Cormorant-Italic;
      color: ${props => (props.textColor === 'offWhite' ? props.theme.offWhite : props.theme.black)};
      margin: 0px;      
    }
    p {
      font-size: 1.5vw;
      margin: 0px;
      color: ${props => (props.textColor === 'offWhite' ? props.theme.offWhite : props.theme.black)};
    }
  }

  .page-section-image {
    border-left: 2px solid ${props => props.theme.black};
  }

  .right {
    border-right: 2px solid ${props => props.theme.black};
    border-left: none;
  }

  @media (max-width: 700px) {
    border-bottom: 1px solid ${props => props.theme.black};
    .page-section-text-picture{
      padding: 10px;
      max-width: 90%;
      padding: 10px;
      h2 {
        text-align: center;
        font-size: 5vw;
      }
      p {
        font-size: 3vw;
        text-align: center;
      }
    }
    .page-section-text{
      padding: 10px;
      max-width: 90%;
      padding: 10px;
      h3 {
        font-size: 5vw;
      }
      p {
        font-size: 3vw;
      }
    }
    .page-section-image{
      border-left: 2px solid ${props => props.theme.black};
      img {
        max-width: 50vw;
      }
  }
  }
`;

export default PageSectionStyles;

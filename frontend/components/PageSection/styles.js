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
  
  .page-section-text{
    max-width: 1500px;
    margin: auto;
    padding: 90px;
    h2 {
      font-size: 2vw;
      text-align: left;
      margin: 0px;
      color: ${props => (props.textColor === 'offWhite' ? props.theme.offWhite : props.theme.black)};
    }
    p {
      font-size: 1vw;
      margin: 0px;
      color: ${props => (props.textColor === 'offWhite' ? props.theme.offWhite : props.theme.black)};
    }
  }
  .page-section-image{
    border-left: 2px solid ${props => props.theme.black};
  }
`;

export default PageSectionStyles;

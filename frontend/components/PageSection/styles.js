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
  
  .page-section-text{
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 0;
    h2 {
      text-align: center;
      margin: 0px;
      color: ${props => (props.textColor === 'offWhite' ? props.theme.offWhite : props.theme.black)};
    }
    p {
      margin: 0px;
      color: ${props => (props.textColor === 'offWhite' ? props.theme.offWhite : props.theme.black)};
    }
  }
  .page-section-image{
    
  }
`;

export default PageSectionStyles;

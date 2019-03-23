import styled from 'styled-components';

const TextBlockStyle = styled.div`
  position: absolute;
  height: 60%;
  bottom: 30%;
  left: 5%;
  text-align: left;


  h1 {
    font-family: 'WorkSans-Regular';
    font-size: 3vw;
    color: ${props => props.theme.black}
  }

  p {
    font-size: 2vw;
    color: ${props => props.theme.black}
  }

  .container {
    display: inline-block;
    top: 10vw;
  }
`;

export default TextBlockStyle;

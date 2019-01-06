import styled from 'styled-components';

const TextBlockStyle = styled.div`
  position: absolute;
  height: 60%;
  width: 1000px;
  bottom: 30%;
  left: 5%;
  text-align: left;

  .container {
    top: 100px
  }
  
  h1 {
    font-family: 'WorkSans-Regular';
    font-size: 3vw;
  }
  p {
    font-size: 2vw;
  }
  a {
    font-size: 1vw;
    border: 1px solid white;
    padding: 10px;
    margin-top: 50px;
  }
  a:hover {
    font-size: 1vw;
  }
  * {
    color: white;
  }
`;

export default TextBlockStyle;

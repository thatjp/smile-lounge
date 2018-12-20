import styled from 'styled-components';

const FooterStyle = styled.div`
  display: grid;
  border-top: 2px solid #000000;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 200px;
  width: 100%;
  .phantom {
    /* display: block;
    padding: 20px;
    height: 60px;
    width: 100%; */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap:20px;
  }
`;

export default FooterStyle;

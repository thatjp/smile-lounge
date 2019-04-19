import styled from 'styled-components';

const LeftNavStyles = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  max-width: 200px;
  a,
  button {
    padding: 2rem 3rem;
    display: flex;
    align-items: right;
    position: relative;
    text-transform: uppercase;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }

    &:after {
      height: 2px;
      background: ${props => props.theme.black};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0,);
      left: 50%;
      bottom: 22px;
      margin-top: 20px;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default LeftNavStyles;

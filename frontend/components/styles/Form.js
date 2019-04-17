import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  from {
    background-position: 0 0;
    /* rotate: 0; */
  }

  to {
    background-position: 100% 100%;
    /* rotate: 360deg; */
  }
`;

const Form = styled.form`
  border: .5px solid ${props => props.theme.black};
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid black;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
    -webkit-appearance: none;
  }
  button,
  input[type='submit'] {
    width: auto;
    background: #ffffff;
    color: #000000;
    border: 1px solid #000000;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    -webkit-appearance: none;
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    /* &::before {
      height: 2px;
      content: '';
      display: block;
      background-image: linear-gradient(to right, #000000 0%, #ffffff 50%, #000000 100%);
    } */
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;

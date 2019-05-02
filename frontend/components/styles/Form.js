import styled, { keyframes } from "styled-components";

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
  padding: 20px;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  h2 {
    text-align: center;
    padding: 30px;
  }
  label {
    display: block;
    margin-bottom: 1rem;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1.5rem;
    &:focus {
      outline: none;
    }
    -webkit-appearance: none;
    border-radius: 0;
    border-style: solid;
    border: none;
    border-radius: 5px;
  }

  button,
  input[type="submit"] {
    width: 100%;
    margin-top: 15px;
    background: #ffffff;
    color: #000000;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    -webkit-appearance: none;
    -webkit-appearance: none;
    border-radius: 0;
    border-style: solid;
    border: none;
    border-radius: 5px;
  }

  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
      animation: ${loading} 0.5s linear infinite;
    }
  }
`;

export default Form;

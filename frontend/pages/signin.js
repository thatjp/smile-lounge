import React from 'react';
import styled from 'styled-components';
import Signin from '../components/Signin';

const Columns = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
`;

const SigninPage = () => (
  <Columns>
    <Signin />
  </Columns>
);

export default SigninPage;

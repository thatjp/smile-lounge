import React from 'react';
import styled from 'styled-components';
import Signup from '../components/Signup/Signup';

const Columns = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px;
`;

const SignupPage = () => (
  <Columns>
    <Signup />
  </Columns>
);

export default SignupPage;

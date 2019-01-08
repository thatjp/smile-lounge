import React from 'react';
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from '../User';
import Signin from '../Signin';
import Columns from './styles';

const SignInWrapper = props => (
  <Query
    query={CURRENT_USER_QUERY}
  >
    {({ data, loading }) => {
      if (loading) return <p>Loading...</p>;
      if (!data.me) {
        return (
          <Columns>
            <div>
              <p>Please sign In before continuing</p>
              <Signin />
            </div>
          </Columns>
        );
      }
      return props.children;
    }}
  </Query>
);

export default SignInWrapper;

import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import PropTypes from 'prop-types';

const CURRENT_USER_QUERY = gql`
query {
    me{
      id
      name
      email
      permissions
    }
  }
`;

const index = props => (
  <Query {...props} query={CURRENT_USER_QUERY}>
    { payload => props.children(payload)}
  </Query>
);

index.propTypes = {
  children: PropTypes.func.isRequired,
};

export default index;
export { CURRENT_USER_QUERY };

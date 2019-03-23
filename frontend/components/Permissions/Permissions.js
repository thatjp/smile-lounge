
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Error from '../ErrorMessage/ErrorMessage';
import TableUser from '../TableUser/TableUser';

const possiblePermissions = [
  'ADMIN',
  'USER',
  'ITEMCREATE',
  'ITEMUPDATE',
  'ITEMDELETE',
  'PERMISSIONUPDATE',
];

const ALL_USERS_QUERY = gql`
  query {
    users {
      id
      name
      email
      permissions
    }
  }
`;

class Permissions extends Component {
  render() {
    return (
      <Query
        query={ALL_USERS_QUERY}
      >
        {({ data, loading, error }) => (
          <div>
            <Error error={error} />
            <div>
              <h2>Manage Permissions</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    {possiblePermissions.map(permission => <th>{permission}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {data.users.map(user => <TableUser user={user} />)}
                </tbody>
              </table>
            </div>
          </div>
        )
        }
      </Query>
    );
  }
}

export default Permissions;

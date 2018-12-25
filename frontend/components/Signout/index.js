import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from '../styles/Form';
import Error from '../ErrorMessage';
import { CURRENT_USER_QUERY } from '../User';

const USER_SIGNOUT_MUTATION = gql`
  mutation USER_SIGNOUT_MUTATION(
    $email: String!, $password: String!
    ) {
    signout(email:$email, password:$password) {
      id
      email
    }
  }
`;

class Signout extends Component {
  state = {
    password: '',
    email: '',
  }

  saveToState = (e) => {
    this.setState({
      // eslint-disable-next-line comma-dangle
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Mutation
        mutation={USER_SIGNOUT_MUTATION}
        variables={this.state}
        // refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        { (signout, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              const res = await signout();
              console.log(res);
              this.setState({
                password: '',
                email: '',
              });
            }}
          >
            <fieldset
              disabled={loading}
              aria-busy={loading}
            >
              <h2>Sign Out</h2>
              <Error error={error} />
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label
                htmlFor="password"
              >
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign In</button>
            </fieldset>
          </Form>)
        }
      </Mutation>
    );
  }
}

export default Signout;

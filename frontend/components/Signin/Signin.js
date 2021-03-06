import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from '../ErrorMessage/ErrorMessage';
import { CURRENT_USER_QUERY } from '../User/User';
import Form from '../styles/Form';

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION(
    $email: String!, $password: String!
  ) {
    signin(email: $email, password: $password) {
      id
      email
    }
  }
`;

class Signin extends Component {
  state={
    email: '',
    password: '',
  };

  saveToState = (e) => {
    this.setState({
      // eslint-disable-next-line comma-dangle
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        { (signin, { error, loading }) => (
          <Form
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              const res = await signin();
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
              <h2>Sign In</h2>
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

export default Signin;

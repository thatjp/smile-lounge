import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Error from '../ErrorMessage/ErrorMessage';
import { CURRENT_USER_QUERY } from '../User/User';
import Form from '../styles/Form';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!, $name: String!, $password: String!
  ) {
    signup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state={
    email: '',
    password: '',
    name: '',
    wasSubmitted: false,
  };

  saveToState = (e) => {
    this.setState({
      // eslint-disable-next-line comma-dangle
      [e.target.name]: e.target.value
    });
  }

  handleClick = () => {
    this.setState({
      wasSubmitted: true,
    });
  }

  render() {
    const {
      email, name, password, wasSubmitted,
    } = this.state;
    return (
      <>
        { wasSubmitted
          ? (
            <div>
              Thanks for your submission
            </div>
          ) : (
            <Mutation
              mutation={SIGNUP_MUTATION}
              variables={this.state}
              refetchQueries={[{ query: CURRENT_USER_QUERY }]}
            >
              { (signup, { error, loading }) => (
                <Form
                  method="post"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await signup();
                    this.setState({
                      name: '',
                      password: '',
                      email: '',
                    });
                  }}
                >
                  <fieldset
                    disabled={loading}
                    aria-busy={loading}
                  >
                    <h2>Sign Up</h2>
                    <Error error={error} />
                    <label htmlFor="email">
                      Email
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={email}
                        onChange={this.saveToState}
                      />
                    </label>
                    <label htmlFor="name">
                      Name
                      <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={name}
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
                        value={password}
                        onChange={this.saveToState}
                      />
                    </label>
                    <button type="submit" onClick={this.handleClick}>Sign Up</button>
                  </fieldset>
                </Form>)
          }
            </Mutation>
          ) }
      </>
    );
  }
}

export default Signup;

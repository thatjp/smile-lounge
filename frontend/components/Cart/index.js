import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Cart = () => (
  <Mutation
    mutation={TOGGLE_CART_MUTATION}
  >
    {toggleCart => (
      <Query
        query={LOCAL_STATE_QUERY}
      >
        {({ data }) => (
          <div>
            <header>
              <button
              // onClick = toggleCart
              // title = data.cartOpen
                type="submit"
              >
                &times;
              </button>
              <h3>Your Cart</h3>
            </header>

            <footer>
              <p>$$</p>
              <button type="submit">
              Checkout
              </button>
            </footer>
          </div>
        )}
      </Query>
    )}
  </Mutation>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };

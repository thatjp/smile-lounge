import React from 'react';
import gql from 'graphql-tag';
import { Query, Mutation } from 'react-apollo';
import User from '../User/User';
import CartItem from '../CartItem/CartItem';
import calcTotalPrice from '../../lib/utils';
import CheckoutWrapper from '../CheckoutWrapper/CheckoutWrapper';

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
  <User>
    {({ data: { me } }) => {
      if (!me) return null;
      return (
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
                    <h3>
                      {me.name} Cart
                    </h3>
                    <p>
                      You have {me.cart.length} items in your cart
                    </p>
                  </header>

                  <ul>
                    {me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
                  </ul>

                  <footer>
                    <p>{calcTotalPrice(me.cart)}</p>
                    {me.cart.length && (
                      <CheckoutWrapper>
                        <button type="submit">
                        Checkout
                        </button>
                      </CheckoutWrapper>
                    )}
                  </footer>
                </div>
              )}
            </Query>
          )}
        </Mutation>
      );
    }}
  </User>
);

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };

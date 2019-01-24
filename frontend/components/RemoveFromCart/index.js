import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../User';

const REMOVED_FROM_CART_MUTATION = gql`
  mutation removedFromCart($id: ID!) {
    removedFromCart(id: $id) {
      id
    }
  }
`;

class RemovedFromCart extends React.Component {
  update = (cache, payload) => {
    const data = cache.readQuery({
      query: CURRENT_USER_QUERY,
    });
    const cartItemId = payload.data.removedFromCart.id;
    data.me.cart = data.me.cart.filter(cartItem => cartItem.id !== cartItemId);
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  }

  render() {
    return (
      <Mutation
        mutation={REMOVED_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removedFromCart: {
            __typename: 'CartItem',
            id: this.props.id,
          },
        }}
      >
        {(removedFromCart, { loading, error }) => (
          <div>
            <button
              disabled={loading}
              onClick={() => removedFromCart()}
            >
              <h2>Delete Item &times;</h2>
            </button>
          </div>
        )}
      </Mutation>
    );
  }
}

export default RemovedFromCart;

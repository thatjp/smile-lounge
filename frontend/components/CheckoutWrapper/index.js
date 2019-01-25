import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Error from '../ErrorMessage';
import User, { CURRENT_USER_QUERY } from '../User';
import calcTotalPrice from '../../lib/utils';

const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

class Checkout extends Component {
  onToken = (res, createOrder) => {
    console.log(res);
    createOrder({
      variables: {
        token: res.id,
      },
    }).catch((err) => {
      alert(err.message);
    });
  }

  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <Mutation
            mutation={CREATE_ORDER_MUTATION}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createOrder => (
              <StripeCheckout
                amount={calcTotalPrice(me.cart)}
                name="Smile Lounge"
                // img = Smile Lounge Logo
                stripeKey="pk_test_KapXKX3oGJx2ij3o5rzV4QKU"
                currency="USD"
                email={me.email}
                token={res => this.onToken(res, createOrder)}
              >
                {this.props.children}
              </StripeCheckout>
            )}
          </Mutation>
        )}
      </User>
    );
  }
}

export default Checkout;

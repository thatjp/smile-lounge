import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import Error from '../ErrorMessage';
import User, { CURRENT_USER_QUERY } from './User';

class Checkout extends Component {
  render() {
    return (
      <User>
        {({ data: { me }})}
      </User>
    )
  }
}

export default Checkout;

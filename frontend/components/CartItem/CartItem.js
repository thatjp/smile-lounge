import React from 'react';
import PropTypes from 'prop-types';
import RemovedFromCart from '../RemoveFromCart/RemoveFromCart';

const CartItem = props => (
  <div>
    <h3>{props.cartItem.item.title}</h3>
    {props.cartItem.id}
    <p>Description: {props.cartItem.item.description}</p>
    <p>Price: {props.cartItem.item.price * props.cartItem.quantity} - {props.cartItem.quantity} &times; {props.cartItem.item.price} </p>
    <RemovedFromCart id={props.cartItem.id} />
  </div>
);

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;

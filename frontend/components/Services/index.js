import React from 'react'
import AddToCart from '../addToCart';

const Services = () => {
  return (
    <div>
      <ul>
        <li>
          Service 1
          <AddToCart />
        </li>
        <li>
          Service 2
          <AddToCart />
        </li>
      </ul>
    </div>
  );
};

export default Services;

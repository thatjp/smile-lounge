import React from 'react'
import AddToCart from '../addToCart';

const Services = () => {
  return (
    <div>
      <ul>
        <li>
          Service 1
          <AddToCart id="cjr9iryk90hkm0a951iisxj9g" />
        </li>
        <li>
          Service 2
          <AddToCart id="cjr9isiyn0hmk0a95s9bdfhxx" />
        </li>
      </ul>
    </div>
  );
};

export default Services;

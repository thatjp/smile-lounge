import React from 'react';
import AddToCart from '../addToCart';

const Services = () => {
  return (
    <div>
      <ul>
        <li>
          Local Service 1
          <AddToCart id="cjr9iryk90hkm0a951iisxj9g" />
          Production Service 1
          <AddToCart id="cjrcjl9vh001q0832affpa85c" />
        </li>
        <li>
          Local Service 2
          <AddToCart id="cjr9isiyn0hmk0a95s9bdfhxx" />
          Production Service 2
          <AddToCart id="cjrcjorgm002b0832x589ptgx" />
        </li>
      </ul>
    </div>
  );
};

export default Services;

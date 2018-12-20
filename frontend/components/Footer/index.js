import React from 'react';

const style = {
  backgroundColor: '#F8F8F8',
  borderTop: '1px solid #E7E7E7',
  border: '1px solid red',
  textAlign: 'left',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  height: '200px',
  width: '100%',
};

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
};


const Footer = () => (
  <div>
    <div style={phantom} />
    <div style={style}>
      <ul>
        <li>things</li>
        <li>things</li>
        <li>things</li>
        <li>things</li>
      </ul>
    </div>
  </div>
);

export default Footer;

import React, { Component } from 'react';
import Head from 'next/head';
import CalenderStyles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Calender extends Component {
  render() {
    return (
      <CalenderStyles>
        <Head>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" />
        </Head>
        <h1>Your Appointments</h1>
        <button
          type="button"
          onClick={() => {
            Calendly.showPopupWidget('https://calendly.com/jpharris-contact');
            return false;
          }}
        >
          Schedule time with me
        </button>
      </CalenderStyles>
    );
  }
}

export default Calender;

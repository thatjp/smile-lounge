import React, { Component } from 'react';
import CalenderStyles from './styles';
import calendlyToken from '../../config';

class Calender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 'wednesday 9:30',
      doctor: 'Doc Doctor PHD',
      title: 'check up for Patience McPatient',
      description: 'check up',
    };
  }

  componentDidMount() {
    const url = 'https://calendly.com/api/v1/hooks';
    const token = calendlyToken;
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Token': token,
        'Content-Type': 'application/json',
        'User-Agent': 'Calendly',
        'Accept-Encoding': 'gzip',
      },
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }

  render() {
    const {
      time,
      title,
      doctor,
      description,
    } = this.state;

    return (
      <CalenderStyles>
        <h1>Your Appointments</h1>
        <div className="appointment-wrapper">
          <h2>{ title }</h2>
          <div>
            <p>{ doctor }</p>
            <p>{ time }</p>
          </div>
          <p>{description}</p>

        </div>
      </CalenderStyles>
    );
  }
}

export default Calender;

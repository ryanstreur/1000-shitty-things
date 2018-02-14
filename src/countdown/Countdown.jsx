import React, {Component} from 'react';

const things = require('../things.json');
const moment = require('moment');

export default class Countdown extends Component {

  constructor() {
    super();

    this.state = {
      timeLeft: getDaysRemaining(),
      thingsLeft: getThingsRemaining(),
      thingsPerDay: getThingsPerDay()
    }
  }

  render() {
    return (
      <section>
        <h1>{this.state.thingsLeft} things left to do</h1>
        <h1>{this.state.timeLeft} days left to do them in</h1>
        <h1>so we need to make {this.state.thingsPerDay} things per day</h1>
      </section>
    )
  }
}

function getDaysRemaining() {
  const theBigDay = moment('20190104', 'YYYYMMDD');
  return theBigDay.diff(moment(), 'days');
}

function getThingsRemaining() {
  return 1000 - things.length;
}

function getThingsPerDay() {
  return Math.ceil(getThingsRemaining() / getDaysRemaining());
}
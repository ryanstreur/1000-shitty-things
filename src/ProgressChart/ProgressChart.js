import React, { Component } from 'react';
import Chart from 'chart.js';
const Bar = require('react-chartjs-2').Bar;
class ProgressChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [{
              label: "garbage",
              backgroundColor: 'brown',
              borderColor: 'orange',
              data: [0, 10, 5, 2, 20, 30, 45],
          }],
      options: {}
      }
    }
  }

  render() {
    return (<Bar
      data={this.state.data}
      width={100}
      height={100}
      options={{
        maintainAspectRatio: false
      }}
    />);
  }
}

export default ProgressChart;
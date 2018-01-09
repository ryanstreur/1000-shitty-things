import React, { Component } from "react";
import {getProgress} from './progress-data';
const Line = require('react-chartjs-2').Line;

class ProgressChart extends Component {
  constructor(props) {
    super();

    this.state = {
      chartData: {
        labels: ['time'],
        datasets: [
          {
            data: getProgress()
          }
        ]
      },
      chartOptions: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
              time: {
                unit: 'day'
              }
            }]
        }
      }
    }
  }

  render() {
    return (
      <Line ref='chart'
            data={this.state.chartData}
            options={this.state.chartOptions}></Line>
    )
  }
}

export default ProgressChart;
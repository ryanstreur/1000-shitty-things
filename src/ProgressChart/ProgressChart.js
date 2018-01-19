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
            fill: false,
            xAxisID: "time-axis",
            data: getProgress()
          }
        ]
      },
      chartOptions: {
        responsive: true,
        fill: false,
        scales: {
          xAxes: [{
            id: "time-axis",
            type: "time",
            bounds: "data",
            time: {
              min: new Date("2018-01-01"),
              max: new Date("2019-01-04")
            }
          }],
          yAxes: [{
            id: "thing-axis",
            ticks: {
              min: 0,
              max: 1000
            }
          }]
        }
      }
    }
  }

  render() {
    return (
      <Line ref='chart'
            height={100}
            data={this.state.chartData}
            options={this.state.chartOptions}></Line>
    )
  }
}

export default ProgressChart;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ProgressChart from './ProgressChart/ProgressChart.js';

class App extends Component {
  render() {
    favoriteIcon();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">1000 shitty things</h1>
        </header>
        <p className="App-intro">
          These are the shitty things Noah Kittleson and Ryan Streur are foolishly exposing to the world.
        </p>
        <ol>
          <li>The site itself - both</li>
          <li>The favicon - Noah</li>
          <li>The animation for the favicon - Ryan</li>
          <li>This list - Ryan</li>
          <li><audio controls src="welcome.wav"></audio> - Ryan</li>
          <li><ProgressChart></ProgressChart></li>
        </ol>
      </div>
    );
  }
}

function favoriteIcon() {
  let iconEl = document.querySelector('#icon');
  let iconMode = 'poop1';
  setInterval(() => {
    if (iconMode !== 'poop1') {
      iconEl.setAttribute('href', './favicon1.ico')
      iconMode = 'poop1';
    } else if (iconMode === 'poop1') {
      iconEl.setAttribute('href', './favicon2.ico')
      iconMode = 'poop2';
    }
  }, 1000);
}

export default App;

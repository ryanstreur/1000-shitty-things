import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GarbageChart from './ProgressChart/GarbageChart.js';
import ProgressChart from './ProgressChart/ProgressChart';
import Donk from './ProgressDonkey.gif';

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
          <li><GarbageChart></GarbageChart></li>
          <li><a href="/broke" className="strikethroughlink">This hyperlink text styling I like (on hover)</a> - Noah</li>
          <li><span className="REDACTED">A link to government secrets</span> - Noah</li>
          <li><ProgressChart></ProgressChart> - Ryan</li>
          <li>A Donkey destined for greater things - Noah <p><img src={Donk} alt="donkeydonkey"/></p></li>
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

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GarbageChart from './ProgressChart/GarbageChart.js';
import ProgressChart from './ProgressChart/ProgressChart';

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
          <li>A Donkey destined for greater things - Noah <p><img src='ProgressDonkey.gif' alt="donkeydonkey"/></p></li>
          <li>My attempts at playing around with LEGO software.  I have reconstructed Greedo to be able to shoot first - AND LAST - Noah <p><img src='Mecha-Greedo.png' alt="Lego Mecha-Greedo"/></p></li>
          <li>Doodles - Noah <p><img src='drink&draw1.JPG' className="photo" alt="doodles"/></p></li>
          <li>New Ghostbusters? - Noah <p><img src='drink&draw2.JPG' className="photo" alt="doodles"/></p></li>
          <li>Ghost-cop and Lamp-cop - Noah & guest contributor Frisbee <p><img src='drink&draw3.JPG' className="photo" alt="ghostbuster vikins"/></p></li>
          <li>Knight-cop and Fish-cop - Noah & guest contributor Katie <p><img src='drink&draw4.JPG' className="photo" alt="a knight and fish buddy cops"/></p></li>
          <li>-A Poem by Noah-
          <p>1000 things made only to be made</p>
          <p>1000 things that fail the passing grade</p>
          <p>3 things a day: our debt we pay to you,</p>
          <p>our humble viewer, yearning for the new.</p>
          <p>For when quality is in decline,</p>
          <p>quantity will do just fine.</p>
          <p>But this is not the time to brag</p>
          <p>we’ve not yet filled our shitty bag!</p>
          <p>There’s room enough for many more,</p>
          <p>At least 984.</p>
          <p>So back we go, to toil away</p>
          <p>and make some shit for another day.</p></li>
          <li>Toilet Man and a Tall Drink of Water on a date - Noah & guest contributor Amy <p><img src='drink&draw5.JPG' className="photo" alt="A dapper toilet and a tall glass of water on a date"/></p></li>
          <li>Rose & Squid on date - Noah & guest contributor Helene<p><img src='drink&draw6.JPG' className="photo" alt="this will not end well"/></p></li>
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

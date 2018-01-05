import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    favoriteIcon();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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

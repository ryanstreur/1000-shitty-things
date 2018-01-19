import React, { Component } from 'react';
import logo from './favicon1.ico';
import './App.css';
import ShittyThing from './ShittyThing';
import favoriteIcon from './favorite-icon';
const things = require('./things.json');

class App extends Component {
  render() {
    const listItems = things.map((thing, i) => <ShittyThing thing={thing} key={i}></ShittyThing>);
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
        <ol>{listItems}</ol>
      </div>
    );
  }
}

export default App;

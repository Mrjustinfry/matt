import React, { Component } from 'react';

import Nav from './Nav';
import Hero from './Hero';

import '../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Hero />
      </div>
    );
  }
}

export default App;

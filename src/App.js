import React, { Component } from 'react';
import AsciiPlayer from './AsciiPlayer.js';
import './App.css';

class App extends Component {
  state = {};
  componentDidMount() {
    console.time('fetch sw1.txt');
    fetch('./sw1.txt').then(x => x.text()).then((txt) => {
      console.timeEnd('fetch sw1.txt');
      this.setState({txt});
    });
  }
  render() {
    const { txt } = this.state;
    return (
      <div className="App">
        <div className="ascii-player-container">
          <AsciiPlayer txt={txt} startingFrameIndex={0 /* 243 */} loop={true} style={{border: '1px solid white', padding: '10px'}}/>
        </div>
      </div>
    );
  }
}

export default App;

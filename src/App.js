import React, { Component } from 'react';
import logo from './logo.svg';
import PropTypes from 'prop-types'
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
    const { style } = this.props;
    const { txt } = this.state;
    return (
      <div className="App">
        <div style={{
          padding: '10px',
          margin: '10px',
          background: '#262626',
          border: '1px dotted grey',
          display: 'inline-block',
        }}>
          <AsciiPlayer txt={txt} startingFrameIndex={243} loop={true} style={{border: '1px solid white', padding: '10px'}}/>
        </div>
        {/*<header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;

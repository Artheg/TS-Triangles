import React, { Component } from 'react';
import './styles/App.css';
import TriangleTypeCheckScreen from './screens/TriangleTypeCheckScreen';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TriangleTypeCheckScreen />
      </div>
    );
  }
}

export default App;

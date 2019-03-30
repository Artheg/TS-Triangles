import React, { Component } from 'react';
import Board from './components/Board';
import './styles/App.css';
import TriangleTest from './screens/TriangleTest';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TriangleTest />
      </div>
    );
  }

}


export default App;

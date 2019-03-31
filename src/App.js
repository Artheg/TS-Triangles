import React, { Component } from 'react';
import './styles/App.css';
import AppRouter from './routes/AppRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AppRouter />
      </div>
    );
  }
}

export default App;

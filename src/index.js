import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window['ts'].ui.ready(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
})

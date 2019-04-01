import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TriangleTypeCheckScreen from '../screens/TriangleTypeCheckScreen';

function AppRouter() {
  return (
    <Router>
        <Route path="/" exact component={TriangleTypeCheckScreen} />
    </Router>
  );
}

export default AppRouter;

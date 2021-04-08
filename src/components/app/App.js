import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../../pages/homePage/Homepage';
import Navigation from '../navigation/Navigation';

import './App.css';

const App = () => (
  <div className="App">
    <div className="header">
      <Navigation />
    </div>
    <Switch>
      <Route path="/" exact component={Homepage} />
    </Switch>
  </div>
);

export default App;

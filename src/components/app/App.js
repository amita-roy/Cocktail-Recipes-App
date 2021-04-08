import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CocktailListPage from '../../pages/cocktailListPage/CocktailListPage';
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
      <Route path="/cocktails" exact component={CocktailListPage} />
    </Switch>
  </div>
);

export default App;

import React from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import CocktailList from '../../container/cocktailList/CocktailList';
import CocktailsFilterForm from '../../container/cocktailsFilterForm/CocktailsFilterForm';

import './CocktailListPage.css';

const CocktailListPage = () => (
  <div>
    <Jumbotron />
    <CocktailsFilterForm />
    <div className="main-content">
      <CocktailList />
    </div>
  </div>
);

export default CocktailListPage;

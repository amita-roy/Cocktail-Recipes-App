import React from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import CocktailList from '../../container/cocktailList/CocktailList'; // eslint-disable-line import/no-named-as-default
import CocktailsFilterForm from '../../container/cocktailsFilterForm/CocktailsFilterForm'; // eslint-disable-line import/no-named-as-default

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

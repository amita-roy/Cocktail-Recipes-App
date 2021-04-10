import React from 'react';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import CocktailList from '../../container/cocktailList/CocktailList';
import CocktailsFilterForm from '../../container/cocktailsFilterForm/CocktailsFilterForm';

const CocktailListPage = () => (
  <div>
    <Jumbotron />
    <CocktailsFilterForm />
    <CocktailList />
  </div>
);

export default CocktailListPage;

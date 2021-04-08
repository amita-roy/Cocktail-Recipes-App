import React from 'react';
import CocktailList from '../../container/cocktailList/CocktailList';
import CocktailsFilterForm from '../../container/cocktailsFilterForm/CocktailsFilterForm';

const CocktailListPage = () => (
  <div>
    <CocktailsFilterForm />
    <CocktailList />
  </div>
);

export default CocktailListPage;

import React from 'react';
import Header from '../../components/header/Header';
import CocktailList from '../../container/cocktailList/CocktailList';
import CocktailsFilterForm from '../../container/cocktailsFilterForm/CocktailsFilterForm';

const CocktailListPage = () => (
  <div>
    <Header />
    <CocktailsFilterForm />
    <CocktailList />
  </div>
);

export default CocktailListPage;

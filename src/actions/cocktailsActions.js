import ACTIONS from './actionTypes';
import { fetchCocktails, fetchCocktail } from '../api/cocktailApi';

export const loadCocktails = () => async (dispatch) => {
  const response = await fetchCocktails();
  dispatch({ type: ACTIONS.LOAD_COCKTAILS, payload: response });
};

export const loadCocktail = (cocktail) => async (dispatch) => {
  const response = await fetchCocktail(cocktail);
  dispatch({ type: ACTIONS.LOAD_COCKTAIL, payload: response });
};

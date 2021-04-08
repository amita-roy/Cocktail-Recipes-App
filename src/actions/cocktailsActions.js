import ACTIONS from './actionTypes';
import { fetchCocktails, fetchCocktail } from '../api/cocktailApi';

export const loadCocktails = () => async function (dispatch) {
  try {
    const response = await fetchCocktails();
    dispatch({ type: ACTIONS.LOAD_COCKTAILS, payload: response });
  } catch (error) {
    throw error;
  }
};

export const loadCocktail = (cocktail) => async function (dispatch) {
  try {
    const response = await fetchCocktail(cocktail);
    dispatch({ type: ACTIONS.LOAD_COCKTAIL, payload: response });
  } catch (error) {
    throw error;
  }
};

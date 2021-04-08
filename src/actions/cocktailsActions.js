import ACTIONS from './actionTypes';
import { fetchCocktails, fetchCocktail, fetchFilteredCocktails } from '../api/cocktailApi';

const noResponse = () => ({
  type: ACTIONS.NO_RESPONSE_RECEIVED,
  payload: false,
});

export const loadCocktails = () => async (dispatch) => {
  const response = await fetchCocktails();
  if (!response) {
    dispatch(noResponse());
  } else {
    dispatch({ type: ACTIONS.LOAD_COCKTAILS, payload: response });
  }
};

export const loadFilteredCocktails = (query) => async (dispatch) => {
  const response = await fetchFilteredCocktails(query);
  if (!response) {
    dispatch(noResponse());
  } else {
    dispatch({ type: ACTIONS.FILTERED_COCKTAILS, payload: response });
  }
};

export const loadCocktail = (cocktail) => async (dispatch) => {
  const response = await fetchCocktail(cocktail);
  dispatch({ type: ACTIONS.LOAD_COCKTAIL, payload: response });
};

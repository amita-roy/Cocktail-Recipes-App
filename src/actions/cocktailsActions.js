import ACTIONS from './actionTypes';
import { fetchCocktails, fetchCocktail, fetchFilteredCocktails } from '../api/cocktailApi';

export const loadCocktails = () => async (dispatch) => {
  const response = await fetchCocktails();
  if (!response) {
    dispatch({ type: ACTIONS.NO_RESPONSE_RECEIVED });
  } else {
    dispatch({ type: ACTIONS.LOAD_COCKTAILS, payload: response });
  }
};

export const loadFilteredCocktails = (query) => async (dispatch) => {
  const response = await fetchFilteredCocktails(query);
  if (!response) {
    dispatch({ type: ACTIONS.NO_RESPONSE_RECEIVED });
  } else {
    dispatch({ type: ACTIONS.FILTERED_COCKTAILS, payload: response });
  }
};

export const loadCocktail = (id) => async (dispatch) => {
  const response = await fetchCocktail(id);
  dispatch({ type: ACTIONS.LOAD_COCKTAIL, payload: response });
};

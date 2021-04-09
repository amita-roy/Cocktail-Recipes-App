import { combineReducers } from 'redux';
import cocktails from './cocktailsReducer';
import selectedCocktail from './cocktailReducer';

export default combineReducers({
  cocktails,
  selectedCocktail,
});

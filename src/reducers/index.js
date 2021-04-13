import { combineReducers } from 'redux';
import cocktails from './cocktailsReducer';
import cocktail from './cocktailReducer';

export default combineReducers({
  cocktails,
  cocktail,
});

import ACTIONS from '../actions/actionTypes';

const cocktailReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_COCKTAIL:
      return action.payload;
    default:
      return state;
  }
};

export default cocktailReducer;

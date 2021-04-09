import ACTIONS from '../actions/actionTypes';

const initialState = {};
const cocktailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_COCKTAIL:
      return action.payload;
    default:
      return state;
  }
};

export default cocktailReducer;

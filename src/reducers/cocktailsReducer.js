import ACTIONS from '../actions/actionTypes';

const cocktailsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.LOAD_COCKTAILS:
      return action.payload;
    default:
      return state;
  }
};

export default cocktailsReducer;

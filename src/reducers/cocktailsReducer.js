import ACTIONS from '../actions/actionTypes';

const cocktailsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.LOAD_COCKTAILS:
      return action.payload;
    case ACTIONS.FILTERED_COCKTAILS:
      return action.payload;
    case ACTIONS.NO_RESPONSE_RECEIVED:
      return state;
    default:
      return state;
  }
};

export default cocktailsReducer;

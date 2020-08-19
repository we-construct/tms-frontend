import { RESET_PASSWORD } from './actions';

const initialState = {
  isReset: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_PASSWORD:
      return {
        ...state,
        isReset: action.isReset,
      };
    default:
      return state;
  }
};

export default loginReducer;

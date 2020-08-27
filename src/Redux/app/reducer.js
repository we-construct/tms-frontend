import { NAVBAR_TOGGLE } from './actions';

const initialState = {
  navbarToggle: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVBAR_TOGGLE:
      return {
        ...state,
        navbarToggle: !state.navbarToggle,
      };
    default:
      return state;
  }
};

export default appReducer;

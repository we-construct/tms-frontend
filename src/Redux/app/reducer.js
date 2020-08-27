import { NAVBAR_TOGGLE, SET_LOADING } from './actions';

const initialState = {
  navbarToggle: false,
  loading: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVBAR_TOGGLE:
      return {
        ...state,
        navbarToggle: !state.navbarToggle,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default appReducer;

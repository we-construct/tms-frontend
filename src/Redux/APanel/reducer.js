import { SET_ERROR, SET_SUCCESS } from "./actions";

const initialState = {
  allUsers: {},
  roles: {},
  positions: {},
  statuses: {},
  success: null,
  error: null,
};

const adminPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_SUCCESS:
      return { ...state, success: action.success.message };
    default:
      return state;
  }
};

export default adminPanelReducer;

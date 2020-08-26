import { SET_ERROR, SET_SUCCESS, SET_ALL_USERS, SET_LOADING } from "./actions";

const initialState = {
  allUsers: null,
  roles: {},
  positions: {},
  statuses: {},
  success: null,
  error: null,
  loading: false,
};

const adminPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_SUCCESS:
      return { ...state, success: action.success.message };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    case SET_ALL_USERS:
      return { ...state, allUsers: action.allUsersData };
    default:
      return state;
  }
};

export default adminPanelReducer;

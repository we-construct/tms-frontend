import { SET_LOGGED_USER, SET_ERROR } from "./actions";

const initialState = {
  user: {
    id: null,
    firstName: null,
    lastName: null,
    phoneNumber: null,
    email: null,
    roleId: null,
    statusId: null,
    positionId: null,
    createdAt: null,
  },
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return { ...state, user: action.userData };
    case SET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default usersReducer;

import {
  SET_LOGGED_USER,
  SET_ERROR,
  SET_SUCCESS,
  SET_PROFILE_DATA,
} from "./actions";

const initialState = {
  user: {
    id: null,
    isAuth: false,
    accessToken: null,
    tokenExpiry: null,
  },
  profileData: [],
  error: null,
  success: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return { ...state, user: action.userData };
    case SET_PROFILE_DATA:
      return { ...state, profileData: action.payload };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_SUCCESS:
      return { ...state, success: action.success };
    default:
      return state;
  }
};

export default usersReducer;

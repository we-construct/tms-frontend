export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT = "LOGOUT";
export const COOKIE_LOGIN = "COOKIE_LOGIN";
export const SET_LOGGED_USER = "SET_LOGGED_USER";
export const ACCEPT_INVITATION = "ACCEPT_INVITATION";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const SET_PROFILE_DATA = "SET_PROFILE_DATA";
export const GET_PROFILE_DATA = "GET_PROFILE_DATA";
export const SET_AVAILABLE_DAYS = "SET_AVAILABLE_DAYS";

// error handling action
export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};
// success handling action
export const setSuccess = (success) => {
  return {
    type: SET_SUCCESS,
    success,
  };
};
// login user watcher action
export const loginUser = (loginData) => {
  return {
    type: LOGIN_USER,
    loginData,
  };
};
// logout user
export const logoutUser = () => {
  return {
    type: LOGOUT,
  };
};
// login user with cookie token
export const loginCookie = () => {
  return {
    type: COOKIE_LOGIN,
  };
};
// saving user data in state action
export const setUserData = (userData) => {
  return {
    type: SET_LOGGED_USER,
    userData,
  };
};
// accept invitation watcher action
export const acceptInvitation = (payload) => {
  return {
    type: ACCEPT_INVITATION,
    payload,
  };
};
// accept invitation watcher action
export const editProfile = (payload) => {
  return {
    type: EDIT_PROFILE,
    payload,
  };
};
// accept invitation watcher action
export const setProfileData = (payload) => {
  return {
    type: SET_PROFILE_DATA,
    payload,
  };
};
export const getProfileData = (payload) => {
  return {
    type: GET_PROFILE_DATA,
    payload,
  };
};


// set vacation available days to profiel
export const setAvailableDays = (days) => ({type: SET_AVAILABLE_DAYS, days})

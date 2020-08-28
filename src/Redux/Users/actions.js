export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";
export const LOGIN_USER = "LOGIN_USER";
export const COOKIE_LOGIN = "COOKIE_LOGIN";
export const SET_LOGGED_USER = "SET_LOGGED_USER";
export const ACCEPT_INVITATION = "ACCEPT_INVITATION";

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
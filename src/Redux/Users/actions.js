export const SET_ERROR = "SET_ERROR";
export const LOGIN_USER = "LOGIN_USER";
export const SET_LOGGED_USER = "SET_LOGGED_USER";

export const setError = (error) => {
  return {
    type: SET_ERROR,
    error,
  };
};
// login user watcher action
export const loginUser = (loginData) => {
  return {
    type: LOGIN_USER,
    loginData,
  };
};
// saving user data in state action
export const setUserData = (userData) => {
  return {
    type: SET_LOGGED_USER,
    userData,
  };
};

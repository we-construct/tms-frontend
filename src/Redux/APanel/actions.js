export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";
export const SET_LOADING = "SET_LOADING";
export const SEND_INVITATION = "SEND_INVITATION";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const SET_ALL_USERS = "SET_ALL_USERS";
export const SET_STATUS = "SET_STATUS";
export const DELETE_USER = "DELETE_USER";

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
// loading handling action
export const setLoading = (loading) => {
  return {
    type: SET_LOADING,
    loading,
  };
};
// send invitation watcher action
export const sendInvite = (invitationData) => {
  return {
    type: SEND_INVITATION,
    invitationData,
  };
};
// get all users action
export const getAllUsers = (payload) => {
  return {
    type: GET_ALL_USERS,
    payload,
  };
};
// get all users action
export const setAllUsers = (allUsersData) => {
  return {
    type: SET_ALL_USERS,
    allUsersData,
  };
};
// chabge user status
export const setUserStatus = (payload) => {
  return {
    type: SET_STATUS,
    payload,
  };
};
// chabge user status
export const deleteUser = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};

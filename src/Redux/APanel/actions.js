export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";
export const SET_LOADING = "SET_LOADING";
export const SEND_INVITATION = "SEND_INVITATION";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const SET_ALL_USERS = "SET_ALL_USERS";
export const SET_STATUS = "SET_STATUS";
export const DELETE_USER = "DELETE_USER";
export const GET_ROLES = 'GET_ROLES';
export const SET_ROLES = 'SET_ROLES';
export const GET_POSITIONS = 'GET_POSITIONS';
export const SET_POSITIONS = 'SET_POSITIONS';
export const GET_STATUSES = 'GET_STATUSES';
export const SET_STATUSES = 'SET_STATUSES';
export const UPDATE_USER = 'UPDATE_USER';

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
//get roles from db
export const getRoles = (accessToken) => ({
  type: GET_ROLES,
  accessToken,
});
//set roles to reducer
export const setRoles = (roles) => ({
  type: SET_ROLES,
  roles,
});
//get positions from db
export const getPositions = (accessToken) => ({
  type: GET_POSITIONS,
  accessToken,
});
//set positions to reducer
export const setPositions = (positions) => ({
  type: SET_POSITIONS,
  positions,
});
//get statuses from db
export const getStatuses = (accessToken) => ({
  type: GET_STATUSES,
  accessToken,
});
//set statuses to reducer
export const setStatuses = (statuses) => ({
  type: SET_STATUSES,
  statuses,
});
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
// update user data
export const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
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

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
export const GET_INVITED_USERS = 'GET_INVITED_USERS';
export const SET_INVITED_USERS = 'SET_INVITED_USERS';
export const GET_POSITIONS = 'GET_POSITIONS';
export const SET_POSITIONS = 'SET_POSITIONS';
export const GET_STATUSES = 'GET_STATUSES';
export const SET_STATUSES = 'SET_STATUSES';
export const UPDATE_USER = 'UPDATE_USER';
export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const GET_VACATION_REQUESTS = 'GET_VACATION_REQUESTS';
export const SET_VACATION_REQUESTS = 'SET_VACATION_REQUESTS';
export const APPROVE_VACATION = 'APPROVE_VACATION';
export const REJECT_VACATION = 'REJECT_VACATION';

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
export const getRoles = () => ({
  type: GET_ROLES,
});
//set roles to reducer
export const setRoles = (roles) => ({
  type: SET_ROLES,
  roles,
});
//get invited users
export const getInvitedUsers = () => ({
  type: GET_INVITED_USERS,
});
//set invited users
export const setInvitedUsers = (users) => ({
  type: SET_INVITED_USERS,
  users,
});
//get positions from db
export const getPositions = () => ({
  type: GET_POSITIONS,
});
//set positions to reducer
export const setPositions = (positions) => ({
  type: SET_POSITIONS,
  positions,
});
//get statuses from db
export const getStatuses = () => ({
  type: GET_STATUSES,
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
// get current user action
export const getCurrentUser = (payload) => {
  return {
    type: GET_CURRENT_USER,
    payload,
  };
};
// get current user action
export const setCurrentUser = (currentUserData) => {
  return {
    type: SET_CURRENT_USER,
    currentUserData,
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
// get vacation requests
export const getVacationRequests = () => ({type: GET_VACATION_REQUESTS})
export const setVacationRequests = (payload) => ({type: SET_VACATION_REQUESTS, payload})
// approve vacation
export const approveVacation = (id) => ({type: APPROVE_VACATION, id})
// reject vacation
export const rejectVacation = (id) => ({type: REJECT_VACATION, id})

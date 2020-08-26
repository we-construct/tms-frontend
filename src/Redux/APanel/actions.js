export const SET_ERROR = 'SET_ERROR';
export const SET_SUCCESS = 'SET_SUCCESS';
export const SEND_INVITATION = 'SEND_INVITATION';
export const SET_INVITED_USER = 'SET_INVITED_USER';
export const GET_ROLES = 'GET_ROLES';
export const SET_ROLES = 'SET_ROLES';
export const GET_POSITIONS = 'GET_POSITIONS';
export const SET_POSITIONS = 'SET_POSITIONS';

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
// senc invitation watcher action
export const sendInvite = (invitationData) => {
  return {
    type: SEND_INVITATION,
    invitationData,
  };
};

//set invited user to state.invitedUsers array
export const setInvitedUser = (user) => ({
  type: SEND_INVITATION,
  user,
});

//get roles from db
export const getRoles = (accessToken) => ({
  type: GET_ROLES,
  accessToken,
});
export const setRoles = (roles) => ({
  type: SET_ROLES,
  roles,
});
//get roles from db
export const getPositions = (accessToken) => ({
  type: GET_POSITIONS,
  accessToken,
});
export const setPositions = (positions) => ({
  type: SET_POSITIONS,
  positions,
});

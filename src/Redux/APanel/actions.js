export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";
export const SEND_INVITATION = "SEND_INVITATION";

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

import {
  SET_ERROR,
  SET_SUCCESS,
  SET_ROLES,
  SET_POSITIONS,
  SEND_INVITATION,
} from './actions';

const initialState = {
  allUsers: {},
  roles: [],
  positions: [],
  statuses: {},
  success: null,
  error: null,
  invitedUsers: [],
};

const adminPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_SUCCESS:
      return { ...state, success: action.success.message };
    case SET_ROLES:
      return { ...state, roles: action.roles };
    case SET_POSITIONS:
      return { ...state, positions: action.positions };
    case SEND_INVITATION:
      return { ...state, invitedUsers: [...state, action.user] };
    default:
      return state;
  }
};

export default adminPanelReducer;

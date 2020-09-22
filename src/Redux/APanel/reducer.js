import {
  SET_ERROR,
  SET_SUCCESS,
  SET_ALL_USERS,
  SET_LOADING,
  SET_ROLES,
  SET_STATUSES,
  SET_POSITIONS,
  SET_INVITED_USERS,
  SET_CURRENT_USER,
  SET_VACATION_REQUESTS,
  ADMIN_SET_PROFILE_DATA
} from './actions';

const initialState = {
  allUsers: null,
  totalPages: 0,
  roles: [],
  positions: [],
  invitedUsers: [],
  currentUser: [],
  userProfile: {
    languages: [],
    experience: [],
    education: [],
    hardSkills: [],
    softSkills: [],
  },
  vacationRequests: [],
  statuses: [],
  success: null,
  error: null,
  loading: false,
};

const adminPanelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_SUCCESS:
      return { ...state, success: action.success };
    case SET_LOADING:
      return { ...state, loading: action.loading };
    case SET_ROLES:
      return { ...state, roles: action.roles };
    case SET_POSITIONS:
      return { ...state, positions: action.positions };
    case SET_STATUSES:
      return { ...state, statuses: action.statuses };
    case SET_ALL_USERS:
      return { ...state, allUsers: action.allUsersData };
    case SET_INVITED_USERS:
      return { ...state, invitedUsers: action.users };
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.currentUserData };
    case ADMIN_SET_PROFILE_DATA:
      return { ...state, userProfile: { ...action.payload } };
    case SET_VACATION_REQUESTS:
      return { ...state, vacationRequests: action.payload };
    default:
      return state;
  }
};

export default adminPanelReducer;

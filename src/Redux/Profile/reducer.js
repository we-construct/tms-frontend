import {
  SET_ERROR,
  SET_SUCCESS,
  SET_EDUCATION,
  SET_EXPERIENCE,
  SET_HARD_SKILLS,
  SET_LANGUAGES,
  SET_SOFT_SKILLS,
} from "./actions";

const initialState = {
  languages: null,
  experience: null,
  education: null,
  hardSkills: null,
  softSkills: null,
  error: null,
  success: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDUCATION:
      return { ...state, education: action.payload };
    case SET_EXPERIENCE:
      return { ...state, experience: action.payload };
    case SET_HARD_SKILLS:
      return { ...state, hardSkills: action.payload };
    case SET_SOFT_SKILLS:
      return { ...state, softSkills: action.payload };
    case SET_LANGUAGES:
      return { ...state, languages: action.payload };
    case SET_ERROR:
      return { ...state, error: action.error };
    case SET_SUCCESS:
      return { ...state, success: action.success };
    default:
      return state;
  }
};

export default profileReducer;

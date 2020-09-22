export const SET_ERROR = "SET_ERROR";
export const SET_SUCCESS = "SET_SUCCESS";
export const GET_LANGUAGES = "GET_LANGUAGES";
export const SET_LANGUAGES = "SET_LANGUAGES";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const SET_EXPERIENCE = "SET_EXPERIENCE";
export const GET_EDUCATION = "GET_EDUCATION";
export const SET_EDUCATION = "SET_EDUCATION";
export const GET_SOFT_SKILLS = "GET_SOFT_SKILLS";
export const SET_SOFT_SKILLS = "SET_SOFT_SKILLS";
export const GET_HARD_SKILLS = "GET_HARD_SKILLS";
export const SET_HARD_SKILLS = "SET_HARD_SKILLS";
export const ADD_EDUCATION = "ADD_EDUCATION";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const ADD_HARD_SKILL = "ADD_HARD_SKILL";
export const ADD_SOFT_SKILL = "ADD_SOFT_SKILL";
export const DELETE_SOFT_SKILL = "DELETE_SOFT_SKILL";
export const DELETE_HARD_SKILL = "DELETE_HARD_SKILL";
export const EDIT_SOFT_SKILL = "EDIT_SOFT_SKILL";
export const EDIT_HARD_SKILL = "EDIT_HARD_SKILL";
export const DELETE_EDUCATION = "DELETE_EDUCATION";
export const DELETE_EXPERIENCE = "DELETE_EXPERIENCE";
export const EDIT_EDUCATION = "EDIT_EDUCATION";
export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";

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

export const getLanguages = (payload) => {
  return {
    type: GET_LANGUAGES,
    payload,
  };
};

export const setLanguages = (payload) => {
  return {
    type: SET_LANGUAGES,
    payload,
  };
};

export const getExperience = (payload) => {
  return {
    type: GET_EXPERIENCE,
    payload,
  };
};

export const setExperience = (payload) => {
  return {
    type: SET_EXPERIENCE,
    payload,
  };
};

export const getEducation = (payload) => {
  return {
    type: GET_EDUCATION,
    payload,
  };
};

export const setEducation = (payload) => {
  return {
    type: SET_EDUCATION,
    payload,
  };
};

export const getSoftSkills = (payload) => {
  return {
    type: GET_SOFT_SKILLS,
    payload,
  };
};

export const setSoftSkills = (payload) => {
  return {
    type: SET_SOFT_SKILLS,
    payload,
  };
};

export const getHardSkills = (payload) => {
  return {
    type: GET_HARD_SKILLS,
    payload,
  };
};

export const setHardSkills = (payload) => {
  return {
    type: SET_HARD_SKILLS,
    payload,
  };
};

export const addEducation = (payload) => {
  return {
    type: ADD_EDUCATION,
    payload,
  };
};

export const addExperience = (payload) => {
  return {
    type: ADD_EXPERIENCE,
    payload,
  };
};

export const addHardSkill = (payload) => {
  return {
    type: ADD_HARD_SKILL,
    payload,
  };
};

export const addSoftSkill = (payload) => {
  return {
    type: ADD_SOFT_SKILL,
    payload,
  };
};

export const deleteSoftSkill = (payload) => {
  return {
    type: DELETE_SOFT_SKILL,
    payload,
  };
};

export const editSoftSkill = (payload) => {
  return {
    type: EDIT_SOFT_SKILL,
    payload,
  };
};

export const deleteHardSkill = (payload) => {
  return {
    type: DELETE_HARD_SKILL,
    payload,
  };
};

export const editHardSkill = (payload) => {
  return {
    type: EDIT_HARD_SKILL,
    payload,
  };
};

export const deleteEducation = (payload) => {
  return {
    type: DELETE_EDUCATION,
    payload,
  };
};

export const deleteExperience = (payload) => {
  return {
    type: DELETE_EXPERIENCE,
    payload,
  };
};

export const editEducation = (payload) => {
  return {
    type: EDIT_EDUCATION,
    payload,
  };
};

export const editExperience = (payload) => {
  return {
    type: EDIT_EXPERIENCE,
    payload,
  };
};

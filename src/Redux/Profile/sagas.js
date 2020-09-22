import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import {
  GET_LANGUAGES,
  GET_EDUCATION,
  GET_HARD_SKILLS,
  GET_EXPERIENCE,
  GET_SOFT_SKILLS,
  ADD_EDUCATION,
  ADD_EXPERIENCE,
  ADD_HARD_SKILL,
  ADD_SOFT_SKILL,
  setError,
  //   setSuccess,
  setLanguages,
  setHardSkills,
  setExperience,
  setEducation,
  setSoftSkills,
  setSuccess,
  DELETE_SOFT_SKILL,
  EDIT_SOFT_SKILL,
  DELETE_HARD_SKILL,
  EDIT_HARD_SKILL,
  DELETE_EDUCATION,
  DELETE_EXPERIENCE, EDIT_EDUCATION, EDIT_EXPERIENCE,
} from "./actions";

export function getLanguages({ id }) {
  return axiosInstance.post(`/profile/languages`, {
    id,
  });
}
export function getEducation({ id }) {
  return axiosInstance.post(`/profile/education`, {
    id,
  });
}
export function getExperience({ id }) {
  return axiosInstance.post(`/profile/experience`, {
    id,
  });
}
export function getSoftSkills({ id }) {
  return axiosInstance.post(`/profile/soft-skills`, {
    id,
  });
}
export function getHardSkills({ id }) {
  return axiosInstance.post(`/profile/hard-skills`, {
    id,
  });
}
export function addEducation(payload) {
  return axiosInstance.post(`/edit-profile/add-education`, {
    ...payload
  });
}
export function addExperience(payload) {
  return axiosInstance.post(`/edit-profile/add-experience`, {
    ...payload
  });
}
export function addHardSkill(payload) {
  return axiosInstance.post(`/edit-profile/add-hardskill`, {
    ...payload
  });
}
export function addSoftSkill(payload) {
  return axiosInstance.post(`/edit-profile/add-softskill`, {
    ...payload
  });
}
export function deleteSoftSkill(payload) {
  return axiosInstance.post(`/edit-profile/delete-softskill`, {
    ...payload
  });
}
export function deleteHardSkill(payload) {
  return axiosInstance.post(`/edit-profile/delete-hardskill`, {
    ...payload
  });
}
export function editSoftSkill(payload) {
  return axiosInstance.post(`/edit-profile/edit-softskill`, {
    ...payload
  });
}
export function editHardSkill(payload) {
  return axiosInstance.post(`/edit-profile/edit-hardskill`, {
    ...payload
  });
}
export function deleteEducation(payload) {
  return axiosInstance.post(`/edit-profile/delete-education`, {
    ...payload
  });
}
export function deleteExperience(payload) {
  return axiosInstance.post(`/edit-profile/delete-experience`, {
    ...payload
  });
}
export function editEducation(payload) {
  return axiosInstance.post(`/edit-profile/edit-education`, {
    ...payload
  });
}
export function editExperience(payload) {
  return axiosInstance.post(`/edit-profile/edit-experience`, {
    ...payload
  });
}

// /////////////////////
export function* workerGetLanguages({ payload }) {
  const res = yield call(getLanguages, payload);
  if (typeof res.data !== "string") {
    yield put(setLanguages(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetLanguages() {
  yield takeEvery(GET_LANGUAGES, workerGetLanguages);
}
// /////////////////////

// /////////////////////
export function* workerGetEducation({ payload }) {
  const res = yield call(getEducation, payload);
  if (typeof res.data !== "string") {
    yield put(setEducation(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetEducation() {
  yield takeEvery(GET_EDUCATION, workerGetEducation);
}
// /////////////////////

// /////////////////////
export function* workerGetExperience({ payload }) {
  const res = yield call(getExperience, payload);
  if (typeof res.data !== "string") {
    yield put(setExperience(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetExperience() {
  yield takeEvery(GET_EXPERIENCE, workerGetExperience);
}
// /////////////////////

// /////////////////////
export function* workerGetHardSkills({ payload }) {
  const res = yield call(getHardSkills, payload);
  if (typeof res.data !== "string") {
    yield put(setHardSkills(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetHardSkills() {
  yield takeEvery(GET_HARD_SKILLS, workerGetHardSkills);
}
// /////////////////////

// /////////////////////
export function* workerGetSoftSkills({ payload }) {
  const res = yield call(getSoftSkills, payload);
  if (typeof res.data !== "string") {
    yield put(setSoftSkills(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetSoftSkills() {
  yield takeEvery(GET_SOFT_SKILLS, workerGetSoftSkills);
}
// /////////////////////

// /////////////////////
export function* workerAddEducation({ payload }) {
  const res = yield call(addEducation, payload);
  const data = yield call(getEducation, {id: payload.id})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setEducation(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchAddEducation() {
  yield takeEvery(ADD_EDUCATION, workerAddEducation);
}
// /////////////////////

// /////////////////////
export function* workerAddExperience({ payload }) {
  const res = yield call(addExperience, payload);
  const data = yield call(getExperience, {id: payload.id})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setExperience(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchAddExperience() {
  yield takeEvery(ADD_EXPERIENCE, workerAddExperience);
}
// /////////////////////

// /////////////////////
export function* workerAddHardSkills({ payload }) {
  const res = yield call(addHardSkill, payload);
  const data = yield call(getHardSkills, {id: payload.id})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setHardSkills(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchAddHardSkills() {
  yield takeEvery(ADD_HARD_SKILL, workerAddHardSkills);
}
// /////////////////////

// /////////////////////
export function* workerAddSoftSkills({ payload }) {
  const res = yield call(addSoftSkill, payload);
  const data = yield call(getSoftSkills, {id: payload.id})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setSoftSkills(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchAddSoftSkills() {
  yield takeEvery(ADD_SOFT_SKILL, workerAddSoftSkills);
}
// /////////////////////

// /////////////////////
export function* workerDeleteSoftSkill({ payload }) {
  const res = yield call(deleteSoftSkill, payload);
  const data = yield call(getSoftSkills, {id: payload.userId})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setSoftSkills(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchDeleteSoftSkills() {
  yield takeEvery(DELETE_SOFT_SKILL, workerDeleteSoftSkill);
}
// /////////////////////

// /////////////////////
export function* workerDeleteHardSkill({ payload }) {
  const res = yield call(deleteHardSkill, payload);
  const data = yield call(getHardSkills, {id: payload.userId})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setHardSkills(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchDeleteHardSkills() {
  yield takeEvery(DELETE_HARD_SKILL, workerDeleteHardSkill);
}
// /////////////////////

// /////////////////////
export function* workerEditSoftSkill({ payload }) {
  const res = yield call(editSoftSkill, payload);
  const data = yield call(getSoftSkills, {id: payload.userId})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setSoftSkills(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchEditSoftSkill() {
  yield takeEvery(EDIT_SOFT_SKILL, workerEditSoftSkill);
}
// /////////////////////

// /////////////////////
export function* workerEditHardSkill({ payload }) {
  const res = yield call(editHardSkill, payload);
  const data = yield call(getHardSkills, {id: payload.userId})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setHardSkills(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchEditHardSkill() {
  yield takeEvery(EDIT_HARD_SKILL, workerEditHardSkill);
}
// /////////////////////

// /////////////////////
export function* workerDeleteEducation({ payload }) {
  const res = yield call(deleteEducation, payload);
  const data = yield call(getEducation, {id: payload.userId})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setEducation(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchDeleteEducation() {
  yield takeEvery(DELETE_EDUCATION, workerDeleteEducation);
}
// /////////////////////

// /////////////////////
export function* workerDeleteExperience({ payload }) {
  const res = yield call(deleteExperience, payload);
  const data = yield call(getExperience, {id: payload.userId})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setExperience(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchDeleteExperience() {
  yield takeEvery(DELETE_EXPERIENCE, workerDeleteExperience);
}
// /////////////////////

// /////////////////////
export function* workerEditEducation({ payload }) {
  const res = yield call(editEducation, payload);
  const data = yield call(getEducation, {id: payload.userId})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setEducation(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchEditEducation() {
  yield takeEvery(EDIT_EDUCATION, workerEditEducation);
}
// /////////////////////

// /////////////////////
export function* workerEditExperience({ payload }) {
  const res = yield call(editExperience, payload);
  const data = yield call(getExperience, {id: payload.userId})
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setExperience(data.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchEditExperience() {
  yield takeEvery(EDIT_EXPERIENCE, workerEditExperience);
}
// /////////////////////

export function* profileSaga() {
  yield all([fork(watchGetLanguages)]);
  yield all([fork(watchGetEducation)]);
  yield all([fork(watchGetExperience)]);
  yield all([fork(watchGetSoftSkills)]);
  yield all([fork(watchGetHardSkills)]);
  yield all([fork(watchAddEducation)]);
  yield all([fork(watchAddExperience)]);
  yield all([fork(watchAddHardSkills)]);
  yield all([fork(watchAddSoftSkills)]);
  yield all([fork(watchDeleteSoftSkills)]);
  yield all([fork(watchDeleteHardSkills)]);
  yield all([fork(watchEditSoftSkill)]);
  yield all([fork(watchEditHardSkill)]);
  yield all([fork(watchDeleteEducation)]);
  yield all([fork(watchDeleteExperience)]);
  yield all([fork(watchEditEducation)]);
  yield all([fork(watchEditExperience)]);
}

import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import {
  setError,
  //   setSuccess,
  setLanguages,
  GET_LANGUAGES,
  setEducation,
  GET_EDUCATION,
  setExperience,
  setHardSkills,
  GET_HARD_SKILLS,
  GET_EXPERIENCE,
  setSoftSkills,
  GET_SOFT_SKILLS,
  ADD_EDUCATION,
  setSuccess,
  ADD_EXPERIENCE,
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

export function* profileSaga() {
  yield all([fork(watchGetLanguages)]);
  yield all([fork(watchGetEducation)]);
  yield all([fork(watchGetExperience)]);
  yield all([fork(watchGetSoftSkills)]);
  yield all([fork(watchGetHardSkills)]);
  yield all([fork(watchAddEducation)]);
  yield all([fork(watchAddExperience)]);
}
import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import {
    LOGIN_USER,
    setUserData,
    setError,
  } from './actions';

// user login request
export function logUser(loginData) {
  return axiosInstance.post(`/login/`, {
    email: loginData.email,
    password: loginData.password,
  });
}

// user login functional
export function* workerLoginUser({ loginData }) {
  const res = yield call(logUser, loginData);
  if (typeof res.data !== "string") {
    //clearing error
    yield put(setError(null));
    yield put(setUserData(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, workerLoginUser);
}
// end of login functional

export function* usersSaga() {
  yield all([fork(watchLoginUser)]);
}

import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import {
  LOGIN_USER,
  COOKIE_LOGIN,
  ACCEPT_INVITATION,
  setUserData,
  setError,
  setSuccess,
} from "./actions";

// user login request
export function logUser(loginData) {
  return axiosInstance.post(`/login/`, {
    email: loginData.email,
    password: loginData.password,
  });
}
// user login request
export function tokenLogin() {
  return axiosInstance.post(`/token`, {
  });
}
// accept invitation request
export function acceptUser({ firstName, lastName, password, confirmPassword, phoneNumber, token }) {
  return axiosInstance.post(`/accept-initation/`, {
    firstName,
    lastName,
    password,
    confirmPassword,
    phoneNumber,
    token,
  });
}

// user login functional
export function* workerLoginUser({ loginData }) {
  const res = yield call(logUser, loginData);
  if (typeof res.data !== "string") {
    //clearing error
    yield put(setError(null));
    yield put(setUserData(res.data));
    yield localStorage.setItem('token', res.data.accessToken);
    // if checked Remember me checkbox save cookies
    yield loginData.isCheckedRememberMe ? (document.cookie = `${res.data.accessToken}; path=/; expires=${res.data.tokenExpiry}`) : null;
  } else {
    yield put(setError(res.data));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, workerLoginUser);
}
// end of login functional

// user login functional
export function* workerTokenLogin() {
  const res = yield call(tokenLogin);
  if (typeof res.data !== "string") {
    //clearing error
    yield put(setError(null));
    yield put(setUserData(res.data));
    yield localStorage.setItem('token', res.data.accessToken);
    // update cookie token
    yield document.cookie = `${res.data.accessToken}; path=/; expires=${res.data.tokenExpiry}`;
  } else {
    yield put(setError(res.data));
  }
}

export function* watchTokenLogin() {
  yield takeEvery(COOKIE_LOGIN, workerTokenLogin);
}
// end of login functional

// accepit invitation functional
export function* workerAcceptUser({ payload }) {
  const res = yield call(acceptUser, payload);
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setError(null));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchAcceptUser() {
  yield takeEvery(ACCEPT_INVITATION, workerAcceptUser);
}
// end of accept invitation

export function* usersSaga() {
  yield all([fork(watchLoginUser)]);
  yield all([fork(watchAcceptUser)]);
  yield all([fork(watchTokenLogin)]);
}

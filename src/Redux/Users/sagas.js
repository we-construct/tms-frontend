import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import {
  LOGIN_USER,
  COOKIE_LOGIN,
  ACCEPT_INVITATION,
  EDIT_PROFILE,
  GET_PROFILE_DATA,
  LOGOUT,
  setUserData,
  setError,
  setSuccess,
  setProfileData,
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
  return axiosInstance.post(`/token`, {});
}
// user login request
export function getData({ id }) {
  return axiosInstance.post(`/user/${id}`, {});
}
// edit user data
export function updateProfile({ firstName, lastName, phoneNumber, birthday, id }) {
  return axiosInstance.post(`/edit-profile`, {
    firstName,
    lastName,
    birthday,
    phoneNumber,
    id,
  });
}
// accept invitation request
export function acceptUser({
  firstName,
  lastName,
  password,
  confirmPassword,
  phoneNumber,
  token,
}) {
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
    yield localStorage.setItem("token", res.data.accessToken);
    // if checked Remember me checkbox save cookies
    yield loginData.isCheckedRememberMe
      ? (document.cookie = `${res.data.accessToken}; path=/; expires=${res.data.tokenExpiry}`)
      : null;
  } else {
    yield put(setError(res.data));
  }
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, workerLoginUser);
}
// end of login functional

// user logout functional
export function* workerLogoutUser() {
  yield put(
    setUserData({
      id: null,
      isAuth: false,
      accessToken: null,
      tokenExpiry: null,
    })
  );
  yield localStorage.setItem("token", "");
  yield (document.cookie = "; expires = Thu, 01 Jan 1970 00:00:00 GMT");
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT, workerLogoutUser);
}
// end of logout functional

// user login functional
export function* workerTokenLogin() {
  const res = yield call(tokenLogin);
  if (typeof res.data !== "string") {
    //clearing error
    yield put(setError(null));
    yield put(setUserData(res.data));
    yield localStorage.setItem("token", res.data.accessToken);
    // update cookie token
    yield (document.cookie = `${res.data.accessToken}; path=/; expires=${res.data.tokenExpiry}`);
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

// edit user data
export function* workerGetProfileData({ payload }) {
  const res = yield call(getData, payload);
  if (typeof res.data !== "string") {
    yield put(setProfileData(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetProfileData() {
  yield takeEvery(GET_PROFILE_DATA, workerGetProfileData);
}
// end of edit user data functional

// edit user data
export function* workerEditProfile({ payload }) {
  const res = yield call(updateProfile, payload);
  const user = yield call(getData, { id: payload.id });
  if (typeof res.data !== "string") {
    yield put(setProfileData(user.data));
    yield put(setSuccess(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchEditProfile() {
  yield takeEvery(EDIT_PROFILE, workerEditProfile);
}
// end of edit user data functional

export function* usersSaga() {
  yield all([fork(watchLoginUser)]);
  yield all([fork(watchLogoutUser)]);
  yield all([fork(watchAcceptUser)]);
  yield all([fork(watchTokenLogin)]);
  yield all([fork(watchEditProfile)]);
  yield all([fork(watchGetProfileData)]);
}

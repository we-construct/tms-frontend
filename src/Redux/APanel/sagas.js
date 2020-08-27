import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import {
  setError,
  setSuccess,
  // setLoading,
  setAllUsers,
  SEND_INVITATION,
  GET_ALL_USERS,
  SET_STATUS,
  DELETE_USER,
} from "./actions";

// user login request
export function sendInvitation({
  accessToken,
  email,
  roleId,
  positionId,
  createdById,
}) {
  return axiosInstance.post(`/send-invitation/`, {
    accessToken,
    email,
    roleId,
    statusId: 1,
    positionId,
    createdById,
  });
}
// get roles list
export function getRoles(accessToken) {
  return axiosInstance.post(`/get/roles`, {
    accessToken,
  });
}
// get positions list
export function getPositions(accessToken) {
  return axiosInstance.post(`/get/positions`, {
    accessToken,
  });
}
// get statuses list
export function getStatuses(accessToken) {
  return axiosInstance.post(`/get/statuses`, {
    accessToken,
  });
}
// get users list
export function getUsers({ accessToken, page }) {
  return axiosInstance.post(`/users`, {
    accessToken,
    page,
  });
}
// activate/deactivate user
export function updateStatus({ accessToken, statusId, id }) {
  return axiosInstance.post(`/action/set-status`, {
    accessToken,
    statusId,
    id,
  });
}
// delete user
export function deleteUser({ accessToken, id }) {
  return axiosInstance.post(`/action/delete`, {
    accessToken,
    id,
  });
}

// admin send invitation functional
export function* workerSendInvitation({ invitationData }) {
  const res = yield call(sendInvitation, invitationData);
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchSendInvitation() {
  yield takeEvery(SEND_INVITATION, workerSendInvitation);
}
// end of send invitation functional

// admin get all users data functional
export function* workerGetAllUsersData({ payload }) {
  yield put(setSuccess(null));
  yield put(setAllUsers(null));
  const res = yield call(getUsers, payload);
  if (typeof res.data !== "string") {
    yield put(setAllUsers(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetAllUsersData() {
  yield takeEvery(GET_ALL_USERS, workerGetAllUsersData);
}
// end of get all users data functional

// activate/deactivate users
export function* workerUpdateUserStatus({ payload }) {
  yield put(setAllUsers(null));
  const res = yield call(updateStatus, payload);
  const users = yield call(getUsers, payload);
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setAllUsers(users.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchUpdateUserStatus() {
  yield takeEvery(SET_STATUS, workerUpdateUserStatus);
}
// end of activate/deactivate functional

// admin delete user functional
export function* workerDeleteUser({ payload }) {
  yield put(setAllUsers(null));
  const res = yield call(deleteUser, payload);
  const users = yield call(getUsers, payload);
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setAllUsers(users.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchDeleteUser() {
  yield takeEvery(DELETE_USER, workerDeleteUser);
}
// end of delete user functional

export function* adminSaga() {
  yield all([fork(watchSendInvitation)]);
  yield all([fork(watchGetAllUsersData)]);
  yield all([fork(watchUpdateUserStatus)]);
  yield all([fork(watchDeleteUser)]);
}

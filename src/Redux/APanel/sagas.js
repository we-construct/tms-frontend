import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import {
  setError,
  setSuccess,
  setLoading,
  setAllUsers,
  setRoles,
  setPositions,
  setStatuses,
  SEND_INVITATION,
  GET_ROLES,
  GET_POSITIONS,
  GET_STATUSES,
  GET_ALL_USERS,
  SET_STATUS,
  DELETE_USER,
  UPDATE_USER,
} from "./actions";

const tokenPlaceholder ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjM4Iiwicm9sZSI6MSwic3RhdHVzIjoxLCJlbWFpbCI6InZhYXJzZW55YW5AZ21haWwuY29tIiwiaWF0IjoxNTk4Mzg0MjI2fQ.TBIUwWxx2N3vQsS3Rb96mxh1xGSyBYribxd2qjAqbu8";

// user login request
export function sendInvitation({
  accessToken,
  email,
  roleId,
  positionId,
  createdById,
}) {
  return axiosInstance.post(`/send-invitation/`, {
    accessToken: tokenPlaceholder,
    email,
    roleId,
    statusId: "1",
    positionId,
    createdById,
  });
}
// get roles list
export function getRoles({ accessToken }) {
  return axiosInstance.post(`/get/roles`, {
    accessToken: tokenPlaceholder,
  });
}
// get positions list
export function getPositions({ accessToken }) {
  return axiosInstance.post(`/get/positions`, {
    accessToken: tokenPlaceholder,
  });
}
// get statuses list
export function getStatuses({ accessToken }) {
  return axiosInstance.post(`/get/statuses`, {
    accessToken: tokenPlaceholder,
  });
}
// get users list
export function getUsers({ accessToken, page }) {
  return axiosInstance.post(`/users`, {
    accessToken: tokenPlaceholder,
    page,
  });
}
// activate/deactivate user
export function updateStatus({ accessToken, statusId, id }) {
  return axiosInstance.post(`/action/set-status`, {
    accessToken: tokenPlaceholder,
    statusId,
    id,
  });
}
// edit user data
export function updateUser({ accessToken, firstName, lastName, statusId, roleId, positionId, phoneNumber, email, id }) {
  return axiosInstance.post(`/action/update-user`, {
    accessToken: tokenPlaceholder,
    firstName,
    lastName,
    email,
    phoneNumber,
    positionId,
    roleId,
    statusId,
    id,
  });
}
// delete user
export function deleteUser({ accessToken, id }) {
  return axiosInstance.post(`/action/delete`, {
    accessToken: tokenPlaceholder,
    id,
  });
}

// admin send invitation functional
export function* workerSendInvitation({ invitationData }) {
  yield put(setLoading(true));
  const res = yield call(sendInvitation, invitationData);
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
  } else {
    yield put(setError(res.data));
  }
  yield put(setLoading(false));
}

export function* watchSendInvitation() {
  yield takeEvery(SEND_INVITATION, workerSendInvitation);
}
// end of send invitation functional

// get all roles from db
export function* workerGetRoles({ accessToken }) {
  const res = yield call(getRoles, accessToken);
  if (typeof res.data !== "string") {
    yield put(setRoles(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetRoles() {
  yield takeEvery(GET_ROLES, workerGetRoles);
}
// end get all roles from db

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

// edit user data
export function* workerEditUser({ payload }) {
  yield put(setAllUsers(null));
  const res = yield call(updateUser, payload);
  const users = yield call(getUsers, payload);
  if (typeof res.data !== "string") {
    yield put(setSuccess(res.data));
    yield put(setAllUsers(users.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchEditUser() {
  yield takeEvery(UPDATE_USER, workerEditUser);
}
// end of edit user data functional

// get all positions from db
export function* workerGetPositions({ accessToken }) {
  const res = yield call(getPositions, accessToken);
  if (typeof res.data !== "string") {
    yield put(setPositions(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetPositions() {
  yield takeEvery(GET_POSITIONS, workerGetPositions);
}
// end get all positions from db

// get all statuses from db
export function* workerGetStatuses({ accessToken }) {
  const res = yield call(getStatuses, accessToken);
  if (typeof res.data !== "string") {
    yield put(setStatuses(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetStatuses() {
  yield takeEvery(GET_STATUSES, workerGetStatuses);
}
// end get all statuses from db

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
  yield all([fork(watchGetRoles)]);
  yield all([fork(watchGetPositions)]);
  yield all([fork(watchGetStatuses)]);
  yield all([fork(watchGetAllUsersData)]);
  yield all([fork(watchUpdateUserStatus)]);
  yield all([fork(watchDeleteUser)]);
  yield all([fork(watchEditUser)]);
}

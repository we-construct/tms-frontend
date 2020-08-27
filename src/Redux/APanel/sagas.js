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
    statusId: "1",
    positionId,
    createdById,
  });
}
// get roles list
export function getRoles({ accessToken }) {
  return axiosInstance.post(`/get/roles`, {
    accessToken,
  });
}
// get positions list
export function getPositions({ accessToken }) {
  return axiosInstance.post(`/get/positions`, {
    accessToken,
  });
}
// get statuses list
export function getStatuses({ accessToken }) {
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
  yield put(setLoading(true));
  const res = yield call(sendInvitation, invitationData);
  console.log(invitationData);
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
}

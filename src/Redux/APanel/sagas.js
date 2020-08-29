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

// user login request
export function sendInvitation({
  email,
  roleId,
  positionId,
  createdById,
}) {
  return axiosInstance.post(`/send-invitation/`, {
    email,
    roleId,
    statusId: "1",
    positionId,
    createdById,
  });
}
// get roles list
export function getRoles() {
  return axiosInstance.post(`/get/roles`, {
  });
}
// get positions list
export function getPositions() {
  return axiosInstance.post(`/get/positions`, {
  });
}
// get statuses list
export function getStatuses() {
  return axiosInstance.post(`/get/statuses`, {
  });
}
// get users list
export function getUsers({ page }) {
  return axiosInstance.post(`/users`, {
    page,
  });
}
// activate/deactivate user
export function updateStatus({ statusId, id }) {
  return axiosInstance.post(`/action/set-status`, {
    statusId,
    id,
  });
}
// edit user data
export function updateUser({ firstName, lastName, statusId, roleId, positionId, phoneNumber, email, id }) {
  return axiosInstance.post(`/action/update-user`, {
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
export function deleteUser({ id }) {
  return axiosInstance.post(`/action/delete`, {
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
export function* workerGetRoles() {
  const res = yield call(getRoles);
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
export function* workerGetPositions() {
  const res = yield call(getPositions);
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
export function* workerGetStatuses() {
  const res = yield call(getStatuses);
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

import { takeEvery, put, all, fork, call } from 'redux-saga/effects';
import axiosInstance from '../../Config/axiosInstance';
import {
  setError,
  setSuccess,
  setRoles,
  setPositions,
  SEND_INVITATION,
  GET_ROLES,
  GET_POSITIONS,
} from './actions';
import { setLoading } from '../app/actions';

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
    statusId: '1',
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
export function getUsers(accessToken) {
  return axiosInstance.post(`/get/users`, {
    accessToken,
  });
}

// admin send invitation functional
export function* workerSendInvitation({ invitationData }) {
  yield put(setLoading(true));
  const res = yield call(sendInvitation, invitationData);
  console.log(invitationData);
  if (typeof res.data !== 'string') {
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
  if (typeof res.data !== 'string') {
    yield put(setRoles(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetRoles() {
  yield takeEvery(GET_ROLES, workerGetRoles);
}
// end get all roles from db

// get all positions from db
export function* workerGetPositions({ accessToken }) {
  const res = yield call(getPositions, accessToken);
  if (typeof res.data !== 'string') {
    yield put(setPositions(res.data));
  } else {
    yield put(setError(res.data));
  }
}

export function* watchGetPositions() {
  yield takeEvery(GET_POSITIONS, workerGetPositions);
}
// end get all positions from db

export function* adminSaga() {
  yield all([fork(watchSendInvitation)]);
  yield all([fork(watchGetRoles)]);
  yield all([fork(watchGetPositions)]);
}

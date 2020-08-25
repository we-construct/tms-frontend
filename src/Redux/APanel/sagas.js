import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import { setError, setSuccess, SEND_INVITATION } from "./actions";

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
    statusId: 4,
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

export function* adminSaga() {
  yield all([fork(watchSendInvitation)]);
}

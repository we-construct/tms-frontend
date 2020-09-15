import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import axiosInstance from "../../Config/axiosInstance";
import { setAvailableDays } from "../Users/actions";
import { ADD_VACATION, loading, setSuccess, setError, GET_VACATIONS, setVacations, requestVacations, setTotalPagesCount, setPage } from "./actions";

// get vacations
export function getVacations({userId, page}) {
  return axiosInstance.post(`/vacations/${userId}`, {page})
}

// request vacation
export function addVacation(vacationData) {
  return axiosInstance.post(`/vacations`, {...vacationData});
}

// request vacation functional
export function* workerGetVacations( {data} ) {
    yield put(setPage(data.page))
    const res = yield call(getVacations, data);
    if(typeof res.data !== "string"){
      yield put(setTotalPagesCount(res.data.pagesCount))
      yield put(setVacations(res.data.data))
      yield put(setAvailableDays(res.data.availableDays))
    }
    else{
      yield put(setError(res.data))
    }
}

export function* watchGetVacations() {
  yield takeEvery(GET_VACATIONS, workerGetVacations);
}
// end of get vacations

export function* workerAddVacation( {payload} ) {
    yield put(loading())
    const res = yield call(addVacation, payload);
    if(res.data.success){
      yield put(setSuccess(res.data.success))
      yield put(requestVacations(payload.userId, 1))
      yield put(loading())
    }
    else{
      yield put(setError(res.data))
      yield put(loading())
    }
}

export function* watchAddVacation() {
  yield takeEvery(ADD_VACATION, workerAddVacation);
}
// end of request vacation

export function* vacationsSaga() {
  yield all([fork(watchAddVacation)]);
  yield all([fork(watchGetVacations)]);
}

import { takeEvery, put, all, fork, call } from "redux-saga/effects";
import { REQUEST_VACATION, loading, setVacationRequest, setSuccess, setError } from "./actions";


const delay = time => new Promise(resolve => setTimeout(resolve, time));

// request vacation functional
export function* workerRequestVacation( {payload} ) {
    yield put(loading())
    yield call(delay, 2000);
    yield put(setSuccess('Vacation request was sent successfully'))
    yield put(setVacationRequest(payload))
    yield put(loading())
}

export function* watchRequestVacation() {
  yield takeEvery(REQUEST_VACATION, workerRequestVacation);
}
// end of request vacation

export function* vacationsSaga() {
  yield all([fork(watchRequestVacation)]);
}

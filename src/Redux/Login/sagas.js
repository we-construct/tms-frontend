import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { setIsPasswordReset, RESET_PASSWORD } from './actions';

export function* sagaWatcher() {
  yield takeEvery(RESET_PASSWORD, sagaWorker);
}

function* sagaWorker({email}) {
  const data = yield call(resetPassword, email);
  if (data.status === 'OK') {
    yield put(
      setIsPasswordReset(
        data.message || 'New password has been sent to your email'
      )
    );
  } else {
    yield put(setIsPasswordReset(data.message || 'Wrong email'));
  }
  setTimeout(() => {
    yield put(setIsPasswordReset(null));
  }, 3000);
}
function resetPassword(email) {
  axios.post(``, email);
  return response.data;
}

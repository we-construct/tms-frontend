import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import usersReducer from './Users/reducer';
import appReducer from './app/reducer';
import vacationReducer from './vacation/reducer';
import adminPanelReducer from './APanel/reducer';
import { usersSaga } from './Users/sagas';
import { adminSaga } from './APanel/sagas';
import { vacationsSaga } from './vacation/saga';
import { all, fork } from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

let reducer = combineReducers({
  userData: usersReducer,
  adminData: adminPanelReducer,
  appData: appReducer,
  vacationData: vacationReducer,
});

function* allSagas() {
  yield all([fork(usersSaga), fork(adminSaga), fork(vacationsSaga)]);
}

let store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(allSagas);

export default store;

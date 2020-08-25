import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import usersReducer from './Users/reducer';
import { usersSaga } from './Users/sagas';
import { all, fork } from 'redux-saga/effects';
import appReducer from './app/reducer';

const sagaMiddleware = createSagaMiddleware();

let reducer = combineReducers({
  userData: usersReducer,
  appData: appReducer,
});

function* allSagas() {
  yield all([fork(usersSaga)]);
}

let store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(allSagas);

export default store;

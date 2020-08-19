import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import usersReducer from './Users/reducer';
import loginReducer from './Login/reducer';
// import { usersSaga } from "./Users/sagas";
// import { all, fork } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

let reducer = combineReducers({
  userData: usersReducer,
  loginData: loginReducer,
});

function* allSagas() {
  //   yield all([fork(usersSaga)]);
}

let store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(allSagas);

export default store;

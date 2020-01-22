import { combineReducers } from "redux";
import { fork } from "redux-saga/effects";
import loader, { sagas as counterSagas } from "./Loader";

export default combineReducers({ loader });

export function* rootSaga() {
  yield fork(counterSagas);
}

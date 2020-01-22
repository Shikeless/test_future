import { takeLatest, put, fork, call } from "redux-saga/effects";
import {
  smallDataRequest,
  smallDataFailure,
  smallDataSuccess,
  bigDataRequest,
  bigDataFailure,
  bigDataSuccess
} from "./actions";

import { fetchSmallData, fetchBigData } from "./api.js";

function* fetchCountWatcher(action) {
  yield takeLatest(smallDataRequest, smallDataRequestFlow);
  yield takeLatest(bigDataRequest, bigDataRequestFlow);
}

function* smallDataRequestFlow() {
  try {
    const data = yield call(fetchSmallData);
    yield put(smallDataSuccess(data));
  } catch (error) {
    yield put(smallDataFailure());
  }
}

function* bigDataRequestFlow() {
  try {
    const data = yield call(fetchBigData);
    yield put(bigDataSuccess(data));
  } catch (error) {
    yield put(bigDataFailure());
  }
}

export default function* root() {
  yield fork(fetchCountWatcher);
}

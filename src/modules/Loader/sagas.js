import { takeLatest, put, fork, call, select } from "redux-saga/effects";
import {
  dataRequest,
  dataFailure,
  dataSuccess,
  searchingRequest,
  searchingFailure,
  searchingSuccess,
  sortingRequest,
  sortingSuccess,
  isLoadingRemove,
  restoreDataRequest,
  restoreDataSuccess,
  addNewDataRequest,
  addNewDataSuccess
} from "./actions";
import { getData } from "./loader";
import { searchResult } from "../../helpers/search";
import { sortResult } from "../../helpers/sort";
import { save, load } from "../../helpers/localStorage";

import { fetchSmallData, fetchBigData } from "./api.js";

function* fetchLoaderWatcher(action) {
  yield takeLatest(dataRequest, dataRequestFlow);
  yield takeLatest(searchingRequest, searchingRequestFlow);
  yield takeLatest(sortingRequest, sortingRequestFlow);
  yield takeLatest(restoreDataRequest, restoreDataRequestFlow);
  yield takeLatest(addNewDataRequest, addNewDataRequestFlow);
}

function* dataRequestFlow(action) {
  try {
    let data;
    if (action.payload === "small") {
      data = yield call(fetchSmallData);
    } else {
      data = yield call(fetchBigData);
    }
    yield call(save, "data", data);
    yield put(dataSuccess(data));
    yield put(isLoadingRemove());
  } catch (error) {
    yield put(dataFailure("Ошибка загрузки, повторите попытку"));
  }
}

function* searchingRequestFlow(action) {
  const data = yield select(getData);
  const result = yield call(searchResult, data, action.payload);
  result.length === 0
    ? yield put(searchingFailure("Результаты поиска остутствуют"))
    : yield put(searchingSuccess(result));
  yield put(isLoadingRemove());
}

function* sortingRequestFlow(action) {
  const data = yield select(getData);
  const result = yield call(
    sortResult,
    data,
    action.payload.direction,
    action.payload.column
  );
  yield put(sortingSuccess(result));
}

function* restoreDataRequestFlow() {
  const data = load("data");
  yield put(isLoadingRemove());
  yield put(restoreDataSuccess(data));
}

function* addNewDataRequestFlow(action) {
  let data = yield call(load, "data");
  yield put(restoreDataSuccess(data));
  yield put(addNewDataSuccess(action.payload));
  data = yield select(getData);
  yield call(save, "data", data);
  yield put(isLoadingRemove());
}

export default function* root() {
  yield fork(fetchLoaderWatcher);
}

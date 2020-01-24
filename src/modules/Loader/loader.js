import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  dataRequest,
  dataFailure,
  dataSuccess,
  searchingRequest,
  searchingSuccess,
  searchingFailure,
  sortingSuccess,
  isLoadingSet,
  isLoadingRemove,
  restoreDataRequest,
  restoreDataSuccess,
  addNewDataRequest,
  addNewDataSuccess
} from "./actions";

const data = handleActions(
  {
    [dataRequest]: () => [],
    [dataSuccess]: (_state, action) => action.payload,
    [addNewDataSuccess]: (_state, action) => [..._state, action.payload],
    [searchingSuccess]: (_state, action) => action.payload,
    [sortingSuccess]: (_state, action) => action.payload,
    [restoreDataSuccess]: (_state, action) => action.payload
  },
  null
);

const error = handleActions(
  {
    [dataRequest]: () => null,
    [dataFailure]: (_state, action) => action.payload,
    [searchingFailure]: (_state, action) => action.payload
  },
  null
);

const isLoading = handleActions(
  {
    [dataRequest]: () => true,
    [isLoadingSet]: () => true,
    [searchingRequest]: () => true,
    [restoreDataRequest]: () => true,
    [addNewDataRequest]: () => true,
    [isLoadingRemove]: () => false
  },
  false
);

export default combineReducers({ data, error, isLoading });

export const getData = state => state.loader.data;
export const getError = state => state.loader.error;
export const getIsLoading = state => state.loader.isLoading;

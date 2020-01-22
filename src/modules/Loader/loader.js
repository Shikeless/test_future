import { handleActions } from "redux-actions";
import { combineReducers } from "redux";
import {
  smallDataRequest,
  smallDataFailure,
  smallDataSuccess,
  bigDataRequest,
  bigDataFailure,
  bigDataSuccess
} from "./actions";

const smallData = handleActions(
  {
    [smallDataRequest]: () => [],
    [smallDataFailure]: () => [],
    [smallDataSuccess]: (_state, action) => action.payload
  },
  []
);
const bigData = handleActions(
  {
    [bigDataRequest]: () => [],
    [bigDataFailure]: () => [],
    [bigDataSuccess]: (_state, action) => action.payload
  },
  []
);

const error = handleActions(
  {
    [smallDataRequest]: () => false,
    [bigDataRequest]: () => false,
    [smallDataFailure]: () => true,
    [bigDataFailure]: () => true
  },
  false
);

export default combineReducers({ smallData, bigData, error });

export const getSmallData = state => state.loader.smallData;
export const getBigData = state => state.loader.bigData;
export const getError = state => state.loader.error;

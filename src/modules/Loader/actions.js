import { createAction } from "redux-actions";

export const dataRequest = createAction("DATA/REQUEST");
export const dataFailure = createAction("DATA/FAILURE");
export const dataSuccess = createAction("DATA/SUCCESS");

export const restoreDataRequest = createAction("RESTOREDATA/REQUEST");
export const restoreDataSuccess = createAction("RESTOREDATA/SUCCESS");

export const addNewDataRequest = createAction("ADDNEWDATA/REQUEST");
export const addNewDataSuccess = createAction("ADDNEWDATA/SUCCESS");

export const searchingRequest = createAction("SEARCHING/REQUEST");
export const searchingFailure = createAction("SEARCHING/FAILURE");
export const searchingSuccess = createAction("SEARCHING/SUCCESS");

export const sortingRequest = createAction("SORTING/REQUEST");
export const sortingSuccess = createAction("SORTING/SUCCESS");

export const isLoadingSet = createAction("ISLOADING/SET");
export const isLoadingRemove = createAction("ISLOADING/REMOVE");

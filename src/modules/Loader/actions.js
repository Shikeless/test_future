import { createAction } from "redux-actions";

export const smallDataRequest = createAction("SMALLDATA/REQUEST");
export const smallDataFailure = createAction("SMALLDATA/FAILURE");
export const smallDataSuccess = createAction("SMALLDATA/SUCCESS");

export const bigDataRequest = createAction("BIGDATA/REQUEST");
export const bigDataFailure = createAction("BIGDATA/FAILURE");
export const bigDataSuccess = createAction("BIGDATA/SUCCESS");

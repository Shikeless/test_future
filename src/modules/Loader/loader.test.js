import reducer from "./loader";

// export const isLoadingSet = createAction("ISLOADING/SET");
// export const isLoadingRemove = createAction("ISLOADING/REMOVE");

describe("Testing loader reducer", () => {
  let store;
  beforeEach(() => {
    store = {};
  });

  it("testing loader reducer for DATA/REQUEST", () => {
    store = reducer(store, { type: "DATA/REQUEST" });
    expect(store).toEqual({
      data: [],
      error: null,
      isLoading: true
    });
  });

  it("testing loader reducer for DATA/FAILURE", () => {
    store = reducer(store, { type: "DATA/FAILURE", payload: "error" });
    expect(store).toEqual({
      data: null,
      error: "error",
      isLoading: false
    });
  });

  it("testing loader reducer for DATA/SUCCESS", () => {
    store = reducer(store, { type: "DATA/SUCCESS", payload: [1, 2, 3] });
    expect(store).toEqual({
      data: [1, 2, 3],
      error: null,
      isLoading: false
    });
  });

  it("testing loader reducer for RESTOREDATA/REQUEST", () => {
    store = reducer(store, { type: "RESTOREDATA/REQUEST" });
    expect(store).toEqual({
      data: null,
      error: null,
      isLoading: true
    });
  });

  it("testing loader reducer for ADDNEWDATA/REQUEST", () => {
    store = reducer(store, { type: "ADDNEWDATA/REQUEST" });
    expect(store).toEqual({
      data: null,
      error: null,
      isLoading: true
    });
  });

  it("testing loader reducer for SEARCHING/REQUEST", () => {
    store = reducer(store, { type: "SEARCHING/REQUEST" });
    expect(store).toEqual({
      data: null,
      error: null,
      isLoading: true
    });
  });

  it("testing loader reducer for SEARCHING/FAILURE", () => {
    store = reducer(store, { type: "SEARCHING/FAILURE", payload: "aaa" });
    expect(store).toEqual({
      data: null,
      error: "aaa",
      isLoading: false
    });
  });

  it("testing loader reducer for SEARCHING/SUCCESS", () => {
    store = reducer(store, { type: "SEARCHING/SUCCESS", payload: "aaa" });
    expect(store).toEqual({
      data: "aaa",
      error: null,
      isLoading: false
    });
  });

  it("testing loader reducer for SORTING/REQUEST", () => {
    store = reducer(store, { type: "SORTING/REQUEST" });
    expect(store).toEqual({
      data: null,
      error: null,
      isLoading: false
    });
  });

  it("testing loader reducer for SORTING/SUCCESS", () => {
    store = reducer(store, { type: "SORTING/SUCCESS" });
    expect(store).toEqual({
      data: null,
      error: null,
      isLoading: false
    });
  });

  it("testing loader reducer for ISLOADING/SET", () => {
    store = reducer(store, { type: "ISLOADING/SET" });
    expect(store).toEqual({
      data: null,
      error: null,
      isLoading: true
    });
  });

  it("testing loader reducer for ISLOADING/REMOVE", () => {
    store = reducer(store, { type: "ISLOADING/REMOVE" });
    expect(store).toEqual({
      data: null,
      error: null,
      isLoading: false
    });
  });
});

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RootRoute from "./components/RootRoute";
import createStore from "./store.js";
import { Provider } from "react-redux";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <RootRoute />
  </Provider>,
  document.getElementById("root")
);

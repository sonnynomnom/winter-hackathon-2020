import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { store } from "./models";
import { Provider } from "react-redux";
import { Router } from "@reach/router";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App path="/" />
      </Router>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);

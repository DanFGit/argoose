import "regenerator-runtime/runtime";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";

import configureStore from "./state";

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<Root />, document.querySelector("#app"));

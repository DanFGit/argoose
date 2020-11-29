/* eslint-disable no-restricted-imports, react/prop-types */

import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";

import createStore from "../state";

const reducerInitialState = {};

const configureStore = (initialState) => {
  const store = createStore(initialState);
  return store;
};

function render(
  ui,
  {
    initialState = reducerInitialState,
    store = configureStore(initialState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };

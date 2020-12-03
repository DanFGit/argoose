/* eslint-disable no-restricted-imports, react/prop-types */

import React from "react";
import { render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

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
    initialEntries = ["/"],
    initialIndex = 0,
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <MemoryRouter
          initialEntries={initialEntries}
          initialIndex={initialIndex}
        >
          {children}
        </MemoryRouter>
      </Provider>
    );
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };

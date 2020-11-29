import "regenerator-runtime/runtime";

import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Header from "./components/Header/Header";
import ProductGrid from "./components/ProductGrid/ProductGrid";

import configureStore from "./state";

const store = configureStore();

const App = () => {
  useEffect(() => {
    const root = document.documentElement;

    // will this be too much when the page is full? probably
    const randomise = () => {
      const colors = ["#ffab0f", "#247afd", "#fe46a5"].sort(
        () => Math.random() - 0.5
      );

      root.style.setProperty("--primary-color", colors[0]);
      root.style.setProperty("--secondary-color", colors[1]);
      root.style.setProperty("--tertiary-color", colors[2]);
    };

    root.addEventListener("click", randomise);

    return () => {
      root.removeEventListener("click", randomise);
    };
  });

  return (
    <Provider store={store}>
      <Header />

      <main id="skip">
        <ProductGrid />
      </main>
    </Provider>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));

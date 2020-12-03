import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import Header from "../Header/Header";
import ProductGrid from "../ProductGrid/ProductGrid";
import Basket from "../Basket/Basket";

import useFetchBasket from "../../hooks/useFetchBasket";

const App = () => {
  useFetchBasket();

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
  }, []);

  return (
    <>
      <Header />

      <main id="skip">
        <Route path="/" exact component={ProductGrid} />
        <Route path="/basket" component={Basket} />
      </main>
    </>
  );
};

export default App;

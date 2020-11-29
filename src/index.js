import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header/Header";
import ProductGrid from "./components/ProductGrid/ProductGrid";

// todo fetch from API
const products = [
  {
    productId: "5493179",
    sku: "549/3179",
    title: "Russell Hobbs Pennine Illuminating S Steel Kettle 20444",
    price: 24.99,
    image: "https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130",
  },
  {
    productId: "4251824",
    sku: "425/1824",
    title: "Challenge White Desk Fan - 12 Inch",
    price: 14.99,
    image: "https://media.4rgos.it/s/Argos/4251824_R_SET?w=110&h=130",
  },
  {
    productId: "tuc132404445",
    sku: "tuc132404445",
    title: "Plain Vest Top 12 BLACK",
    price: 16,
    image: "https://media.4rgos.it/s/Argos/tuc132404445?w=110&h=130",
  },
  {
    productId: "4049641",
    sku: "404/9641",
    title: "Wilson Roger Federer 27 Inch Adult Tennis Racket",
    price: 24.99,
    image: "https://media.4rgos.it/s/Argos/4049641_R_SET?w=110&h=130",
  },
  {
    productId: "5399235",
    sku: "539/9235",
    title: "My Little Pony Cutie Mark Rainbow Dash",
    price: 24.99,
    image: "https://media.4rgos.it/s/Argos/5399235_R_SET?w=110&h=130",
  },
  {
    productId: "7543412",
    sku: "754/3412",
    title: "Sim Free iPhone X 256GB Mobile Phone- Space Grey",
    price: 1109,
    image: "https://media.4rgos.it/s/Argos/7543412_R_SET?w=110&h=130",
  },
  {
    productId: "7067462",
    sku: "706/7462",
    title: "Assassin's Creed Origins PS4 Game",
    price: 30.99,
    image: "https://media.4rgos.it/s/Argos/7067462_R_SET?w=110&h=130",
  },
  {
    productId: "7426735",
    sku: "7426735",
    title: "Duracell Supreme 750 mAh Rechargeable AAA Batteries - 4 Pack",
    price: 8.99,
    image: "https://media.4rgos.it/s/Argos/7426735_R_SET?w=110&h=130",
  },
];

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
    <>
      <Header />

      <main id="skip">
        <ProductGrid products={products} />
      </main>
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#app"));

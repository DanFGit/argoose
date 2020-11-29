import React from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header/Header";

const App = () => (
  <>
    <Header />
    <main>
      <p>Testing hot module reloading</p>
    </main>
  </>
);

ReactDOM.render(<App />, document.querySelector("#app"));

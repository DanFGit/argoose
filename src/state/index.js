import { configureStore } from "@reduxjs/toolkit";
import createRootReducer from "./reducers";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: createRootReducer(),
    preloadedState,
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () =>
      store.replaceReducer(createRootReducer())
    );
  }

  return store;
}

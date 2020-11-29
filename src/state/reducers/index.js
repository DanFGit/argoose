import { combineReducers } from "redux";

import products from "./products";

const createRootReducer = () =>
  combineReducers({
    products,
  });

export default createRootReducer;

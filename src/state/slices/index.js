import { combineReducers } from "redux";

import basket from "./basket";
import products from "./products";

const createRootReducer = () =>
  combineReducers({
    basket,
    products,
  });

export default createRootReducer;

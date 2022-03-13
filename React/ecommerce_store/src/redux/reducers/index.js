//Use to combine mutiple reducers
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const allReducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});

export default allReducers;

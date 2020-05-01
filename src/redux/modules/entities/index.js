import { combineReducers } from "redux-immutable";
import products from "./products";
import shops from "./shops";
import orders from "./orders";
import comments from "./comments";

//合并领域状态
const rootReducer = combineReducers({
  products,
  shops,
  orders,
  comments,
});

export default rootReducer;

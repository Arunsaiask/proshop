import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  productListReducers,
  productDetailsReducer,
} from "./reducers/productReducers";
import { CartReducer } from "./reducers/CartReducers";

const reducer = combineReducers({
  productList: productListReducers,
  productDetails: productDetailsReducer,
  cart: CartReducer,
});
const CartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : []
const initialState = {
  cart: {cartItems:CartItemsFromLocalStorage},
}
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

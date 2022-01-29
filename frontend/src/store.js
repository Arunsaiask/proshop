import {createStore,combineReducers,applyMiddleware} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
import thunk from "redux-thunk"
import {productListReducers,productDetailsReducer} from "./reducers/productReducers"


const reducer  = combineReducers({
    productList:productListReducers,
    productDetails:productDetailsReducer
})
const initialState = {}
const middleware = [thunk]

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))

export default store
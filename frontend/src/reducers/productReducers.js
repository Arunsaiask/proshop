import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productListConstants";

export const productListReducers = (
  state = {
    products: [],
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_LIST_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: payload,
      };
    case PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = {
    product: {
      reviews: [],
    }
  },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        loading: false,
        ...state
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        product: payload,
        loading: false,
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

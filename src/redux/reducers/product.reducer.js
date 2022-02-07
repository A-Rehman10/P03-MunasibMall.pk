import {
  GET_ALl_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_FAILURE,
  GET_ALL_PRODUCTS_SUCCESS,
  DELETE_PRODUCT,
  PRODUCT_ERROR,
  GET_YOUR_PRODUCTS_FAILURE,
  GET_YOUR_PRODUCTS_REQUEST,
  GET_YOUR_PRODUCTS_SUCCESS,
  ADD_PRODUCT_FAILURE,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_REQUEST,
  EDIT_PRODUCT_SUCCESS,
} from '../types';

const initialState = {
  products: [],
  prduct: null,
  loading: false,
  getProductsSuccess: false,
  error: {},
};

function productReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_ALl_PRODUCTS_REQUEST:
    case GET_YOUR_PRODUCTS_REQUEST:
    case ADD_PRODUCT_REQUEST:
    case EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCTS_SUCCESS:
    case GET_YOUR_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        getProductsSuccess: true,
        loading: false,
      };
    case GET_ALL_PRODUCTS_FAILURE:
    case GET_YOUR_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        product: null,
        loading: false,
        getProductsSuccess: false,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product._id !== payload),
        loading: false,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        products: [payload, ...state.products],
        loading: false,
      };
    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ADD_PRODUCT_FAILURE:
    case PRODUCT_ERROR:
    case EDIT_PRODUCT_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default productReducer;

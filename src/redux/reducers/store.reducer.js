import {
  GET_ALl_STORES_REQUEST,
  GET_ALL_STORES_FAILURE,
  GET_ALL_STORES_SUCCESS,
  GET_STORES_PRODUCTS_REQUEST,
  GET_STORES_PRODUCTS_FAILURE,
  GET_STORES_PRODUCTS_SUCCESS,
  CREATE_STORE_REQUEST,
  CREATE_STORE_SUCCESS,
  CREATE_STORE_FAILURE,
  GET_YOUR_STORES_FAILURE,
  GET_YOUR_STORES_REQUEST,
  GET_YOUR_STORES_SUCCESS,
  DELETE_STORE,
  STORE_ERROR,
  EDIT_STORE_REQUEST,
  EDIT_STORE_FAIL,
  EDIT_STORE_SUCCESS,
} from '../types';

const initialState = {
  stores: [],
  store: null,
  store_products: [],
  getStoreProductsSuccess: false,
  loading: false,
  getStoresSuccess: false,
  error: {},
};

function storeReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case GET_ALl_STORES_REQUEST:
    case GET_YOUR_STORES_REQUEST:
    case EDIT_STORE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_STORES_SUCCESS:
    case GET_YOUR_STORES_SUCCESS:
      return {
        ...state,
        stores: payload,
        getStoresSuccess: true,
        loading: false,
      };
    case GET_ALL_STORES_FAILURE:
    case GET_YOUR_STORES_FAILURE:
      return {
        ...state,
        stores: [],
        store: null,
        loading: false,
        geStoresSuccess: false,
      };

    case GET_STORES_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_STORES_PRODUCTS_SUCCESS:
      return {
        ...state,
        stores_products: payload,
        getStoreProductsSuccess: true,
        loading: false,
      };
    case GET_STORES_PRODUCTS_FAILURE:
      return {
        ...state,
        stores_products: [],
        loading: false,
        getStoreProductsSuccess: false,
      };

    case CREATE_STORE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_STORE_SUCCESS:
      return {
        ...state,
        stores: [payload, ...state.stores],
        loading: false,
      };
    case DELETE_STORE:
      return {
        ...state,
        stores: state.stores.filter(store => store._id !== payload),
        loading: false,
      };
    case EDIT_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CREATE_STORE_FAILURE:
    case EDIT_STORE_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case STORE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default storeReducer;

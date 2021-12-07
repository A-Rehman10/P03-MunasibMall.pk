import {
  GET_ALl_STORES_REQUEST,
  GET_ALL_STORES_FAILURE,
  GET_ALL_STORES_SUCCESS,
  GET_STORES_PRODUCTS_REQUEST,
  GET_STORES_PRODUCTS_FAILURE,
  GET_STORES_PRODUCTS_SUCCESS,
  CREATE_STORE_FAILURE,
  CREATE_STORE_REQUEST,
  CREATE_STORE_SUCCESS,
  GET_YOUR_STORES_FAILURE,
  GET_YOUR_STORES_REQUEST,
  GET_YOUR_STORES_SUCCESS,
  DELETE_STORE,
  STORE_ERROR,
  EDIT_STORE_REQUEST,
  EDIT_STORE_FAIL,
  EDIT_STORE_SUCCESS,
} from '../types';
import axios from 'axios';
import {setAlert} from './alert.action';
import {baseUrl} from './base-url';

export const getStoresList = searchStore => async dispatch => {
  try {
    dispatch({
      type: GET_ALl_STORES_REQUEST,
    });

    const res = await axios.get(
      `${baseUrl}/api/store/get-all?searchStore=${searchStore}`,
    );

    dispatch({
      type: GET_ALL_STORES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_STORES_FAILURE,
    });
  }
};

export const getStoreProductList =
  (searchProduct, store_id) => async dispatch => {
    try {
      dispatch({
        type: GET_STORES_PRODUCTS_REQUEST,
      });

      const res = await axios.get(
        `${baseUrl}/api/product/get_products/${store_id}?searchProduct=${searchProduct}`,
      );

      dispatch({
        type: GET_STORES_PRODUCTS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: GET_STORES_PRODUCTS_FAILURE,
      });
    }
  };

export const createStore =
  (store_name, store_city, store_image, token) => async dispatch => {
    const body = {store_name, store_city, store_image};
    try {
      dispatch({
        type: CREATE_STORE_REQUEST,
      });
      const res = await axios.post(`${baseUrl}/api/store/create`, body, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': `${token}`,
        },
      });

      dispatch({
        type: CREATE_STORE_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
      const errors = err.response.data.errors;
      console.log(errors);

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg)));
      }

      dispatch({
        type: CREATE_STORE_FAILURE,
        payload: {msg: err.response.statusText, status: err.response.status},
      });
    }
  };
//get your store list
export const getYourStoresList = (searchStore, token) => async dispatch => {
  try {
    dispatch({
      type: GET_YOUR_STORES_REQUEST,
    });

    const res = await axios.get(
      `${baseUrl}/api/store/your-store?searchStore=${searchStore}`,
      {
        headers: {
          'x-auth-token': `${token}`,
        },
      },
    );

    dispatch({
      type: GET_YOUR_STORES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_YOUR_STORES_FAILURE,
    });
  }
};

// Delete store
export const deleteStore = (store_id, token) => async dispatch => {
  try {
    await axios.delete(`${baseUrl}/api/store/${store_id}/delete`, {
      headers: {
        'x-auth-token': `${token}`,
      },
    });

    dispatch({
      type: DELETE_STORE,
      payload: store_id,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: STORE_ERROR,
      payload: err,
    });
  }
};

//edit store
export const editStore = (store_id, values, token) => async dispatch => {
  try {
    dispatch({
      type: EDIT_STORE_REQUEST,
    });
    await axios.put(`${baseUrl}/api/store/${store_id}/update`, values, {
      headers: {
        'x-auth-token': `${token}`,
      },
    });
    dispatch({
      type: EDIT_STORE_SUCCESS,
      payload: store_id,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: EDIT_STORE_FAIL,
      payload: err,
    });
  }
};

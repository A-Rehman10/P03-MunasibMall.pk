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
import axios from 'axios';
import {baseUrl} from './base-url';
import {setAlert} from './alert.action';

export const getProducts = searchProduct => async dispatch => {
  try {
    dispatch({
      type: GET_ALl_PRODUCTS_REQUEST,
    });

    const res = await axios.get(
      `${baseUrl}/api/product/get_all?searchProduct=${searchProduct}`,
    );

    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ALL_PRODUCTS_FAILURE,
    });
  }
};

// Delete product
export const deleteProduct = (product_id, token) => async dispatch => {
  try {
    await axios.delete(`${baseUrl}/api/product/delete-single/${product_id}`, {
      headers: {
        'x-auth-token': `${token}`,
      },
    });

    dispatch({
      type: DELETE_PRODUCT,
      payload: product_id,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PRODUCT_ERROR,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

export const getYourProducts = (searchProduct, token) => async dispatch => {
  try {
    dispatch({
      type: GET_YOUR_PRODUCTS_REQUEST,
    });

    const res = await axios.get(
      `${baseUrl}/api/product/your-product?searchProduct=${searchProduct}`,
      {
        headers: {
          'x-auth-token': `${token}`,
        },
      },
    );

    dispatch({
      type: GET_YOUR_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_YOUR_PRODUCTS_FAILURE,
    });
  }
};

export const addProduct = (values, token) => async dispatch => {
  try {
    dispatch({
      type: ADD_PRODUCT_REQUEST,
    });
    const res = await axios.post(`${baseUrl}/api/product/create`, values, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
    });

    dispatch({
      type: ADD_PRODUCT_SUCCESS,
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
      type: ADD_PRODUCT_FAILURE,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

export const editProduct = (product_id, values, token) => async dispatch => {
  try {
    dispatch({
      type: EDIT_PRODUCT_REQUEST,
    });
    await axios.put(`${baseUrl}/api/product/${product_id}/update`, values, {
      headers: {
        'x-auth-token': `${token}`,
      },
    });
    dispatch({
      type: EDIT_PRODUCT_SUCCESS,
      payload: product_id,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: EDIT_PRODUCT_FAIL,
      payload: err,
    });
  }
};

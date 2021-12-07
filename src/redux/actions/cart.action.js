import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from '../types';
import axios from 'axios';
import {baseUrl} from './base-url';
export const addToCart = product_id => async dispatch => {
  const res = await axios.get(
    `${baseUrl}/api/product/get-single/${product_id}`,
  );
  const item = res.data;
  console.log(item);
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};
export const removeItem = product_id => async dispatch => {
  const res = await axios.get(
    `${baseUrl}/api/product/get-single/${product_id}`,
  );
  const item = res.data;
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {product_id, item},
  });
};
export const emptyCart = () => dispatch => {
  dispatch({
    type: EMPTY_CART,
  });
};

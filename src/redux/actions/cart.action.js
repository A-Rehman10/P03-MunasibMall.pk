import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from '../types';
import axios from 'axios';
import {baseUrl} from './base-url';
export const addToCart = product_id => async dispatch => {
  const res = await axios.get(
    `${baseUrl}/api/product/get-single/${product_id}`,
  );
  const item = {
    _id: res.data._id,
    title: res.data.title,
    description: res.data.description,
    actual_price: res.data.actual_price,
    discount: res.data.discount,
    discounted_price: res.data.discounted_price,
    store_name: res.data.store_name,
    category_name: res.data.category_name,
    merchant_id: res.data.merchant_id,
    category_id: res.data.category_id,
    product_image: res.data.product_image,
    store_id: res.data.store_id,
    created_at: res.data.created_at,
    qty: 1,
  };
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

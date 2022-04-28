import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST} from '../types';
import axios from 'axios';
import {baseUrl} from './base-url';
import {setAlert} from './alert.action';
export const addToWishList = product_id => async dispatch => {
  const res = await axios.get(
    `${baseUrl}/api/product/get-single/${product_id}`,
  );

  dispatch({
    type: ADD_TO_WISHLIST,
    payload: res.data,
  });
  dispatch(setAlert('Item has been added to wishlist', 'green'));
};
export const removeFromWishList = product_id => async dispatch => {
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    payload: product_id,
  });
};
export const emptyWishList = () => dispatch => {
  dispatch({
    type: EMPTY_WISHLIST,
  });
};

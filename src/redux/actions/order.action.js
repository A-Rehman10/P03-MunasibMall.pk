import {
  CREATE_ORDER,
  GET_MERCHANT_PENDING_ORDERS,
  GET_MERCHANT_COMPLETED_ORDERS,
  GET_BUYER_PENDING_ORDERS,
  GET_BUYER_COMPLETED_ORDERS,
  UPDATE_ORDER_STATUS,
} from '../types';
import axios from 'axios';
import {baseUrl} from './base-url';

export const createOrder = (values, token) => async dispatch => {
  try {
    const res = await axios.post(`${baseUrl}/api/orders/create`, values, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
    });
    dispatch({
      type: CREATE_ORDER,
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const getMerchantPendingOrders = token => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/api/orders/merchant/pending/get`, {
      headers: {
        'x-auth-token': `${token}`,
      },
    });

    dispatch({
      type: GET_MERCHANT_PENDING_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getMerchantCompletedOrders = token => async dispatch => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/orders/merchant/completed/get`,
      {
        headers: {
          'x-auth-token': `${token}`,
        },
      },
    );

    dispatch({
      type: GET_MERCHANT_COMPLETED_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getBuyerPendingOrders = token => async dispatch => {
  try {
    const res = await axios.get(`${baseUrl}/api/orders/customer/pending/get`, {
      headers: {
        'x-auth-token': `${token}`,
      },
    });

    dispatch({
      type: GET_BUYER_PENDING_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getBuyerCompletedOrders = token => async dispatch => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/orders/customer/completed/get`,
      {
        headers: {
          'x-auth-token': `${token}`,
        },
      },
    );

    dispatch({
      type: GET_BUYER_COMPLETED_ORDERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateOrder = (order_id, token) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
    };
    await axios.put(`${baseUrl}/api/orders/update/${order_id}`, {}, config);

    dispatch({
      type: UPDATE_ORDER_STATUS,
      payload: order_id,
    });
  } catch (err) {
    console.log(err);
  }
};

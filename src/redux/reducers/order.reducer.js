import {
  CREATE_ORDER,
  GET_MERCHANT_PENDING_ORDERS,
  GET_MERCHANT_COMPLETED_ORDERS,
  GET_BUYER_PENDING_ORDERS,
  GET_BUYER_COMPLETED_ORDERS,
  UPDATE_ORDER_STATUS,
} from '../types';

const initialState = {
  loading: false,
  merchantPendingOrders: [],
  merchantCompletedOrders: [],
  BuyerPendingOrders: [],
  BuyerCompletedOrders: [],
};

function orderReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case CREATE_ORDER:
      return {
        ...state,
      };
    case GET_MERCHANT_PENDING_ORDERS:
      return {
        ...state,
        loading: false,
        merchantPendingOrders: payload,
      };
    case GET_MERCHANT_COMPLETED_ORDERS:
      return {
        ...state,
        loading: false,
        merchantCompletedOrders: payload,
      };
    case GET_BUYER_PENDING_ORDERS:
      return {
        ...state,
        loading: false,
        BuyerPendingOrders: payload,
      };
    case GET_BUYER_COMPLETED_ORDERS:
      return {
        ...state,
        loading: false,
        buyertCompletedOrders: payload,
      };
    case UPDATE_ORDER_STATUS:
      return {
        ...state,
        merchantPendingOrders: state.merchantPendingOrders.filter(
          order => order._id !== payload,
        ),
        loading: false,
      };
    default:
      return state;
  }
}

export default orderReducer;

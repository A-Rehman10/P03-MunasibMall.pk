import {ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART} from '../types';

const initialState = {
  cart: [],
  total: 0,
};

function productReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ADD_TO_CART:
      const existItem = state.cart.find(x => x._id === payload._id);

      if (existItem) {
        return {
          ...state,
          cart: state.cart.map(x => (x._id === existItem._id ? payload : x)),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, payload],
          total: state.total + payload.discounted_price,
        };
      }
    case EMPTY_CART:
      return {
        ...state,
        cart: [],
        total: 0,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item._id !== payload.product_id),
        total: state.total - payload.item.discounted_price,
      };
    default:
      return state;
  }
}

export default productReducer;

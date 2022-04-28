import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST} from '../types';

const initialState = {
  wishList: [],
};

function wishListReducer(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ADD_TO_WISHLIST:
      const existItem = state.wishList.find(x => x._id === payload._id);

      if (existItem) {
        return {
          ...state,
          wishList: state.wishList.map(x =>
            x.product === existItem.product ? payload : x,
          ),
        };
      } else {
        return {
          ...state,
          wishList: [payload, ...state.wishList],
        };
      }
    case EMPTY_WISHLIST:
      return {
        ...state,
        wishList: [],
      };
    case REMOVE_FROM_WISHLIST:
      return {
        ...state,
        wishList: state.wishList.filter(product => product._id !== payload),
        loading: false,
      };
    default:
      return state;
  }
}

export default wishListReducer;

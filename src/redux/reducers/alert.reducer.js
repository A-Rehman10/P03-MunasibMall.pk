import {SET_ALERT, REMOVE_ALERT} from '../types';

const initialState = [];

function alertReducer(state = initialState, action) {
  const {type, payload} = action;

  console.log('Alert Reducer: ', action);

  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);
    default:
      return state;
  }
}

export default alertReducer;

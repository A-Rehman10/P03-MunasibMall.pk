import uuid from 'react-native-uuid';
import {SET_ALERT, REMOVE_ALERT} from '../types';
const id = uuid.v4();
export const setAlert =
  (msg, color = 'red', timeout = 5000) =>
  dispatch => {
    dispatch({
      type: SET_ALERT,
      payload: {msg, id, color},
    });

    setTimeout(() => dispatch({type: REMOVE_ALERT, payload: id}), timeout);
  };

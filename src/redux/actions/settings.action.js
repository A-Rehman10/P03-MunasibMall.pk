import {ENABLE_TOUCH_ID} from '../types';

export const enableTouchId = () => async dispatch => {
  dispatch({
    type: ENABLE_TOUCH_ID,
  });
};

import {ENABLE_TOUCH_ID} from '../types';

const initialState = {
  isTouchIdEnabled: false,
};

function settingsReducer(state = initialState, action) {
  const {type} = action;

  switch (type) {
    case ENABLE_TOUCH_ID:
      return {
        ...state,
        isTouchIdEnabled: !state.isTouchIdEnabled,
      };
    default:
      return state;
  }
}

export default settingsReducer;

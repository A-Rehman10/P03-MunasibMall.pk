import {
  LOGIN_SUCCESS,
  AUTH_ERROR,
  LOG_OUT,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  REGISTER_MERCHANT_REQUEST,
  REGISTER_MERCHANT_SUCCESS,
  REGISTER_MERCHANT_FAIL,
  REGISTER_BUYER_REQUEST,
  REGISTER_BUYER_SUCCESS,
  REGISTER_BUYER_FAIL,
  ACCOUNT_VERIFICATION_REQUEST,
  ACCOUNT_VERIFICATION_SUCCESS,
  ACCOUNT_VERIFICATION_FAIL,
  EDIT_PROFILE_FAIL,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
} from '../types';

const initialState = {
  token: '',
  isAuthenticated: false,
  loading: false,
  user: {},
  error: {},
  success: false,
};

function authReducer(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case LOGIN_REQUEST:
    case REGISTER_BUYER_REQUEST:
    case REGISTER_MERCHANT_REQUEST:
    case ACCOUNT_VERIFICATION_REQUEST:
    case CHANGE_PASSWORD_REQUEST:
    case EDIT_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_BUYER_SUCCESS:
    case REGISTER_MERCHANT_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isAuthenticated: true,
        loading: false,
      };
    case ACCOUNT_VERIFICATION_SUCCESS:
    case EDIT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        user: payload.user,
        isAuthenticated: true,
      };
    case EDIT_PROFILE_FAIL:
    case ACCOUNT_VERIFICATION_FAIL:
    case CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case REGISTER_MERCHANT_FAIL:
    case REGISTER_BUYER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOG_OUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: null,
        user: null,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}

export default authReducer;

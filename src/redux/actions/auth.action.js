// import api from "../utils/api";
import {setAlert} from './alert.action';
import {
  LOGIN_SUCCESS,
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
import axios from 'axios';
import {baseUrl} from './base-url';

// Login User with email
export const login = (email, password) => async dispatch => {
  const body = {email, password};

  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const res = await axios.post(`${baseUrl}/api/auth/login`, body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log('Authentication Error ', err.response.data.errors);

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

//register a new user as Merchant
export const registerMerchant = values => async dispatch => {
  try {
    dispatch({
      type: REGISTER_MERCHANT_REQUEST,
    });
    const res = await axios.post(`${baseUrl}/api/users/merchant`, values);
    // dispatch(setAlert(res.data.msg, "alert"));
    dispatch({
      type: REGISTER_MERCHANT_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: REGISTER_MERCHANT_FAIL,
    });
  }
};

//register a new user as a Customer/Buyer
export const registerBuyer = values => async dispatch => {
  try {
    dispatch({
      type: REGISTER_BUYER_REQUEST,
    });
    const res = await axios.post(`${baseUrl}/api/users/customer`, values);
    // dispatch(setAlert(res.data.msg, "alert"));
    dispatch({
      type: REGISTER_BUYER_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: REGISTER_BUYER_FAIL,
    });
  }
};

// Verify User Account
export const verifyAccount = (email, otpCode) => async dispatch => {
  const body = {email, otpCode};

  try {
    dispatch({
      type: ACCOUNT_VERIFICATION_REQUEST,
    });
    const res = await axios.put(`${baseUrl}/api/users/verify`, body);

    dispatch({
      type: ACCOUNT_VERIFICATION_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors);

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: ACCOUNT_VERIFICATION_FAIL,
      payload: {msg: err.response.statusText, status: err.response.status},
    });
  }
};

//Update Profile
export const editProfile = (values, token) => async dispatch => {
  try {
    dispatch({
      type: EDIT_PROFILE_REQUEST,
    });
    const res = await axios.put(`${baseUrl}/api/users/update/profile`, values, {
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': `${token}`,
      },
    });
    dispatch({
      type: EDIT_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    console.log('Error', errors);

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: EDIT_PROFILE_FAIL,
    });
  }
};

// Change Account Password;
export const changeAccountPassword =
  (oldPassword, newPassword, token) => async dispatch => {
    const body = {oldPassword, newPassword};

    try {
      dispatch({
        type: CHANGE_PASSWORD_REQUEST,
      });
      const res = await axios.put(
        `${baseUrl}/api/users/change-password`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': `${token}`,
          },
        },
      );

      dispatch({
        type: CHANGE_PASSWORD_SUCCESS,
      });
      dispatch(setAlert(res.data.msg));
    } catch (err) {
      const errors = err.response.data.errors;
      console.log(errors);

      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg)));
      }

      dispatch({
        type: CHANGE_PASSWORD_FAIL,
        payload: {msg: err.response.statusText, status: err.response.status},
      });
    }
  };

// Logout
export const logout = () => dispatch => {
  dispatch({
    type: LOG_OUT,
  });
};

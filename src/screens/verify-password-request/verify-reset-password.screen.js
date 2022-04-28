/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import VerifyPasswordForm from './verify-reset-password.form';
import {View} from 'react-native';
import styles from '../home/home.style';
import {baseUrl} from '../../redux/actions/base-url';
import axios from 'axios';
import {SCREENS} from '../../constants/screens';
import {useDispatch} from 'react-redux';
import {setAlert} from '../../redux/actions/alert.action';
import StepIndicator from 'react-native-step-indicator';
import {customStepperStyles} from '../../config/steppers-style';

const VerifyResetPasswordScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {email, currentPosition} = route.params;
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const onSubmit = async values => {
    const {resetCode} = values;
    try {
      setLoading(true);
      const res = await axios.put(
        `${baseUrl}/api/users/reset-password/verify`,
        {email: email, resetCode: parseInt(resetCode, 10)},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setLoading(false);
      if (res.status === 200) {
        navigation.navigate(SCREENS.RESET_PASSWORD, {
          email: email,
          currentPosition: currentPosition + 1,
        });
      } else {
        console.log(res.status);
      }
    } catch (error) {
      console.log('Error is', error.response.data.errors);
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg)));
      }
      setLoading(false);
    }
  };

  const onSubmitResendOtp = async () => {
    try {
      setResendLoading(true);
      const res = await axios.put(
        `${baseUrl}/api/users/reset-password/send`,
        {email: email},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setResendLoading(false);
      if (res.status === 200) {
        dispatch(
          setAlert(
            'We have again sent you an otp to reset your password',
            'green',
          ),
        );
      } else {
        console.log(res.status);
      }
    } catch (error) {
      console.log('Error is', error.response.data.errors);
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg)));
      }
      setLoading(false);
    }
  };

  const labels = ['Enter email', 'Verify otp code', 'Change password'];

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 50, paddingHorizontal: 30}}>
        <StepIndicator
          customStyles={customStepperStyles}
          currentPosition={currentPosition}
          labels={labels}
          stepCount={3}
        />
      </View>
      <VerifyPasswordForm
        handleSubmit={onSubmit}
        disabled={loading}
        userEmail={email}
        handleResendOtp={onSubmitResendOtp}
        resendLoading={resendLoading}
      />
    </View>
  );
};

export default VerifyResetPasswordScreen;

/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import ForgotPasswordForm from './forgot-password.form';
import {View} from 'react-native';
import styles from '../home/home.style';
import {baseUrl} from '../../redux/actions/base-url';
import axios from 'axios';
import {SCREENS} from '../../constants/screens';
import {useDispatch} from 'react-redux';
import {setAlert} from '../../redux/actions/alert.action';
import StepIndicator from 'react-native-step-indicator';
import {customStepperStyles} from '../../config/steppers-style';

const ForgotPasswordScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const onSubmit = async values => {
    const {email} = values;
    try {
      setLoading(true);
      const res = await axios.put(
        `${baseUrl}/api/users/reset-password/send`,
        values,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setLoading(false);
      if (res.status === 200) {
        navigation.navigate(SCREENS.VERIFY_RESET_PASSWORD_REQUEST, {
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

  let currentPosition = 0;

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

      <ForgotPasswordForm handleSubmit={onSubmit} disabled={loading} />
    </View>
  );
};

export default ForgotPasswordScreen;

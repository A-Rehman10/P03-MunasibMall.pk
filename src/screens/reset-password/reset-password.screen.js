/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import VerifyPasswordForm from './reset-password.form';
import {View} from 'react-native';
import styles from '../home/home.style';
import {baseUrl} from '../../redux/actions/base-url';
import axios from 'axios';
import {SCREENS} from '../../constants/screens';
import {useDispatch} from 'react-redux';
import {setAlert} from '../../redux/actions/alert.action';
import StepIndicator from 'react-native-step-indicator';
import {customStepperStyles} from '../../config/steppers-style';

const ResetPasswordScreen = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {email, currentPosition} = route.params;
  const [loading, setLoading] = useState(false);

  const onSubmit = async values => {
    const {password, confirmPassword} = values;
    try {
      setLoading(true);
      const res = await axios.put(
        `${baseUrl}/api/users/reset-password/finalize`,
        {email: email, password: password, confirmPassword: confirmPassword},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setLoading(false);
      if (res.status === 200) {
        dispatch(setAlert(res.data.msg, 'green'));
        navigation.reset({
          index: 0,
          routes: [{name: SCREENS.LOGIN}],
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
      <VerifyPasswordForm handleSubmit={onSubmit} disabled={loading} />
    </View>
  );
};

export default ResetPasswordScreen;

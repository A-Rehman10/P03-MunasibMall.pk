import React from 'react';
import VerificationForm from './verification.form';
import {connect} from 'react-redux';
import {verifyAccount} from '../../redux/actions/auth.action';
import PropTypes from 'prop-types';
import {Alert, View} from 'react-native';
import styles from '../home/home.style';
import {baseUrl} from '../../redux/actions/base-url';
import {setAlert} from '../../redux/actions/alert.action';
import {useDispatch} from 'react-redux';
import axios from 'axios';

// eslint-disable-next-line no-shadow
const VerifyAccountScreen = ({verifyAccount, loading, user}) => {
  const dispatch = useDispatch();
  const onSubmit = values => {
    const {otpCode} = values;

    verifyAccount(user.email, parseInt(otpCode, 10));
  };

  const onSubmitResendOtp = async () => {
    const res = await axios.put(
      `${baseUrl}/api/users/verification-code/resend`,
      {email: user.email},
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (res.status === 200) {
      dispatch(
        setAlert(
          'We have again sent you an otp code , please use this code to verify your account',
        ),
      );
    } else {
      console.log(res.status);
    }
  };

  return (
    <View style={styles.container}>
      <VerificationForm
        handleSubmit={onSubmit}
        handleResendOtp={onSubmitResendOtp}
        userEmail={user.email}
        disabled={loading}
      />
    </View>
  );
};

VerifyAccountScreen.propTypes = {
  verifyAccount: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {verifyAccount})(VerifyAccountScreen);

import React from 'react';
import VerificationForm from './verification.form';
import {connect} from 'react-redux';
import {verifyAccount} from '../../redux/actions/auth.action';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from '../home/home.style';

// eslint-disable-next-line no-shadow
const VerifyAccountScreen = ({verifyAccount, loading, user}) => {
  const onSubmit = values => {
    const {otpCode} = values;

    verifyAccount(user.email, parseInt(otpCode, 10));
  };

  return (
    <View style={styles.container}>
      <VerificationForm handleSubmit={onSubmit} />
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

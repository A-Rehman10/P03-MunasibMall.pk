import React, {useState} from 'react';
import SignUpForm from './sign-up-form';
import {SCREENS} from '../../../constants/screens';
import {Loader} from '../../../components/loader';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {registerMerchant} from '../../../redux/actions/auth.action';
import * as Keychain from 'react-native-keychain';

// eslint-disable-next-line no-shadow
const MerchnatSignUp = ({registerMerchant, loading}) => {
  const navigation = useNavigation();
  const onSubmit = values => {
    console.log(values);
    const {email, password} = values;
    Keychain.setGenericPassword(email, password);
    registerMerchant(values);
  };

  const navigateToLogin = () => {
    navigation.navigate(SCREENS.LOGIN);
  };

  return (
    <>
      <SignUpForm
        handleSubmit={onSubmit}
        navigateToLogin={navigateToLogin}
        disabled={loading}
      />
    </>
  );
};

MerchnatSignUp.propTypes = {
  registerMerchant: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {registerMerchant})(MerchnatSignUp);

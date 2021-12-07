import React from 'react';
import SignUpForm from './sign-up-form';
import {SCREENS} from '../../../constants/screens';
import {Loader} from '../../../components/loader';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {registerMerchant} from '../../../redux/actions/auth.action';

// eslint-disable-next-line no-shadow
const MerchnatSignUp = ({loading, registerMerchant}) => {
  const navigation = useNavigation();
  const onSubmit = values => {
    console.log(values);
    registerMerchant(values);
  };

  const navigateToLogin = () => {
    navigation.navigate(SCREENS.LOGIN);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <SignUpForm handleSubmit={onSubmit} navigateToLogin={navigateToLogin} />
      )}
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

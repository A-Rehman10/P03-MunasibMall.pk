import React from 'react';
import SignUpForm from './sign-up-form';
import {SCREENS} from '../../../constants/screens';
import {Loader} from '../../../components/loader';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {registerBuyer} from '../../../redux/actions/auth.action';

// eslint-disable-next-line no-shadow
const BuyerSignUp = ({loading, registerBuyer}) => {
  const navigation = useNavigation();
  const onSubmit = values => {
    console.log(values);
    registerBuyer(values);
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

BuyerSignUp.propTypes = {
  registerBuyer: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps, {registerBuyer})(BuyerSignUp);

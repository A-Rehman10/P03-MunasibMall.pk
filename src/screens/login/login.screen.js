import React from 'react';
import LoginForm from './login-form';
import {SCREENS} from '../../constants/screens';
import {Loader} from '../../components/loader';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth.action';

// eslint-disable-next-line no-shadow
const Login = ({login, isAuthenticated, isLogging}) => {
  const navigation = useNavigation();
  const onSubmit = values => {
    console.log(values);
    const {email, password} = values;

    login(email, password);
  };

  const navigateToForgotPassword = () => {
    navigation.navigate(SCREENS.FORGOT_PASSWORD);
  };
  const navigateToSignUp = () => {
    navigation.navigate(SCREENS.SIGN_UP);
  };

  return (
    <>
      {isLogging ? (
        <Loader />
      ) : (
        <>
          <LoginForm
            handleSubmit={onSubmit}
            navigateToForgot={navigateToForgotPassword}
            navigateToSignUp={navigateToSignUp}
          />
        </>
      )}
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  isLogging: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLogging: state.auth.loading,
});

export default connect(mapStateToProps, {login})(Login);

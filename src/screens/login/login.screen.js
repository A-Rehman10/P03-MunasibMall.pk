import React, {useEffect, useState} from 'react';
import LoginForm from './login-form';
import {SCREENS} from '../../constants/screens';
import {Loader} from '../../components/loader';
import PropTypes from 'prop-types';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {login} from '../../redux/actions/auth.action';
import TouchID from 'react-native-touch-id';
import * as Keychain from 'react-native-keychain';
import {useDispatch} from 'react-redux';
// eslint-disable-next-line no-shadow
const Login = ({login, isAuthenticated, isTouchIdEnabled}) => {
  const dispatch = useDispatch();
  const [isLogging, setIslogging] = useState(false);
  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const navigation = useNavigation();
  const onSubmit = values => {
    console.log(values);
    const {email, password} = values;
    setIslogging(true);
    Keychain.setGenericPassword(email, password);
    login(email, password);
    setIslogging(false);
  };

  useEffect(() => {
    getCredentials();
  });

  const getCredentials = () => {
    Keychain.getGenericPassword() // Retrieve the credentials from the keychain
      .then(credentials => {
        const {password, username} = credentials;
        console.log('Credentials are', credentials);
        setEmail(username);
        setPassword(password);
      })
      .catch(error => {
        // User's device does not support Touch ID (or Face ID)
        console.log(error);
      });
  };
  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed to Log in', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  const handleBiometric = () => {
    TouchID.authenticate(
      `Use FingerPrint toauthenticate ${userEmail}`,
      optionalConfigObject,
    )
      .then(success => {
        if (success) {
          dispatch(login(userEmail, userPassword));
        }
      })
      .catch(error => {
        console.log('Error occured in authentication');
      });
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
            handleBiometric={handleBiometric}
            isTouchIdEnabled={isTouchIdEnabled}
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
  isTouchIdEnabled: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLogging: state.auth.loading,
  isTouchIdEnabled: state.settings.isTouchIdEnabled,
});

export default connect(mapStateToProps, {login})(Login);
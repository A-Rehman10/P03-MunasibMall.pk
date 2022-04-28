/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, View, Image, ActivityIndicator} from 'react-native';
import {PreAuthenticationStack} from './src/navigation/pre-auth-stack/pre-auth.stack';
import {connect} from 'react-redux';
import {MerchantPostAuthenticationStack} from './src/navigation/post-auth-stack/merchant/post-auth.stack';
import {BuyerPostAuthenticationStack} from './src/navigation/post-auth-stack/buyer/post-auth.stack';
import {VerifyAccountStack} from './src/navigation/verify-account-stack';
import {COLOR} from './src/config/color';
import PropTypes from 'prop-types';
const MyApp = ({isAuthenticated, user, token}) => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const delay = 2;
  useEffect(() => {
    let timer1 = setTimeout(() => setShowSplashScreen(false), delay * 1000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
      {showSplashScreen ? (
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('./src/assets/logos/logo.png')}
            style={{
              width: 400,
              height: 400,
              alignSelf: 'center',
            }}
          />
          <ActivityIndicator
            animating={true}
            color={COLOR.YELLOW}
            size="large"
          />
        </View>
      ) : (
        <>
          {token ? (
            user && !user.isVerified ? (
              <VerifyAccountStack />
            ) : user.role === 'Merchant' ? (
              <MerchantPostAuthenticationStack />
            ) : (
              <BuyerPostAuthenticationStack />
            )
          ) : (
            <PreAuthenticationStack />
          )}
        </>
      )}
    </SafeAreaProvider>
  );
};

MyApp.propTypes = {
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  token: state.auth.token,
  user: state.auth.user,
});

export default connect(mapStateToProps, {})(MyApp);

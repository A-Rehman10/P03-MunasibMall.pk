import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {PreAuthenticationStack} from './src/navigation/pre-auth-stack/pre-auth.stack';
import {connect} from 'react-redux';
import {MerchantPostAuthenticationStack} from './src/navigation/post-auth-stack/merchant/post-auth.stack';
import {BuyerPostAuthenticationStack} from './src/navigation/post-auth-stack/buyer/post-auth.stack';
import {VerifyAccountStack} from './src/navigation/verify-account-stack';
import PropTypes from 'prop-types';
const MyApp = ({isAuthenticated, user, token}) => {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} />
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

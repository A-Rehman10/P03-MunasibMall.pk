import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../constants/screens';
import Login from '../../screens/login/login.screen';
import SignUp from '../../screens/signup/signup.screen';
import MerchnatSignUp from '../../screens/merchant/sign-up/sign-up.screen';
import BuyerSignUp from '../../screens/buyer/sign-up/sign-up.screen';
import {FontHelper} from '../../helpers';
import ForgotPasswordScreen from '../../screens/forogt-password/forgot-password.screen';
import VerifyResetPasswordScreen from '../../screens/verify-password-request/verify-reset-password.screen';
import ResetPasswordScreen from '../../screens/reset-password/reset-password.screen';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.LOGIN}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      {/* <Stack.Screen
        name={SCREENS.ACCOUNT}
        component={AuthSelection}
        options={{headerShown: true, headerTitle: 'Aa'}}
      /> */}
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={Login}
        options={{headerShown: true, headerTitle: 'Login'}}
      />
      <Stack.Screen
        name={SCREENS.SIGN_UP}
        component={SignUp}
        options={{headerShown: true, headerTitle: 'Sing Up as'}}
      />
      <Stack.Screen
        name={SCREENS.MERCHANT_SIGNUP}
        component={MerchnatSignUp}
        options={{
          headerShown: true,
          headerTitle: 'Merchant',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name={SCREENS.BUYER_SIGNUP}
        component={BuyerSignUp}
        options={{
          headerShown: true,
          headerTitle: 'Buyer',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name={SCREENS.FORGOT_PASSWORD}
        component={ForgotPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: 'Forgot Password',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name={SCREENS.VERIFY_RESET_PASSWORD_REQUEST}
        component={VerifyResetPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: 'Verify Otp',
          headerBackTitle: 'Back',
        }}
      />

      <Stack.Screen
        name={SCREENS.RESET_PASSWORD}
        component={ResetPasswordScreen}
        options={{
          headerShown: true,
          headerTitle: 'Reset Password',
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};

export {AccountStack};

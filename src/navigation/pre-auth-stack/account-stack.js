import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../constants/screens';
import Login from '../../screens/login/login.screen';
import AuthSelection from '../../screens/account-selection';
import SignUp from '../../screens/signup/signup.screen';
import MerchnatSignUp from '../../screens/merchant/sign-up/sign-up.screen';
import BuyerSignUp from '../../screens/buyer/sign-up/sign-up.screen';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.ACCOUNT}>
      <Stack.Screen
        name={SCREENS.ACCOUNT}
        component={AuthSelection}
        options={{headerShown: true, headerTitle: ''}}
      />
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={Login}
        options={{headerShown: true}}
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
    </Stack.Navigator>
  );
};

export {AccountStack};

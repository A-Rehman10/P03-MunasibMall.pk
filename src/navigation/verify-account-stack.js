import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../constants/screens';
import VerifyAccountScreen from '../screens/account-verification/account-verification.screen';

const Stack = createStackNavigator();

const VerifyAccountStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.VERIFY_ACCOUNT}>
      <Stack.Screen
        name={SCREENS.VERIFY_ACCOUNT}
        component={VerifyAccountScreen}
        options={{headerShown: true, headerTitle: 'Verify Account'}}
      />
    </Stack.Navigator>
  );
};

export {VerifyAccountStack};

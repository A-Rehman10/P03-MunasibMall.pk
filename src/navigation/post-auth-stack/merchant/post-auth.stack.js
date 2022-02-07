import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../../constants/screens';
import {MerchantTabs} from './tab-navigator';

const Stack = createStackNavigator();

const MerchantPostAuthenticationStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.MERCHANT_TABS}>
      <Stack.Screen
        name={SCREENS.MERCHANT_TABS}
        component={MerchantTabs}
        options={{headerShown: false, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export {MerchantPostAuthenticationStack};

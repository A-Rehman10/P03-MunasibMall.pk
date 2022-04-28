import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../../constants/screens';
import {MerchantTabs} from './tab-navigator';
import {FontHelper} from '../../../helpers';

const Stack = createStackNavigator();

const MerchantPostAuthenticationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MERCHANT_TABS}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.MERCHANT_TABS}
        component={MerchantTabs}
        options={{headerShown: false, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export {MerchantPostAuthenticationStack};

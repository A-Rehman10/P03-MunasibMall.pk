import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../../constants/screens';
import BuyerTabs from './tab-navigator';
import {FontHelper} from '../../../helpers';

const Stack = createStackNavigator();

const BuyerPostAuthenticationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.BUYER_TABS}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.BUYER_TABS}
        component={BuyerTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export {BuyerPostAuthenticationStack};

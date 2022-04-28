import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../constants/screens';
import BasicTabs from './tab-navigator';
import {FontHelper} from '../../helpers';

const Stack = createStackNavigator();

const PreAuthenticationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.PRE_AUTH_TABS}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.PRE_AUTH_TABS}
        component={BasicTabs}
        options={{headerShown: false, headerTitle: ''}}
      />
    </Stack.Navigator>
  );
};

export {PreAuthenticationStack};

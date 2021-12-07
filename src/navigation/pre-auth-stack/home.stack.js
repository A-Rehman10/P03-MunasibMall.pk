import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../screens/home/home.screen';
import {SCREENS} from '../../constants/screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME}>
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{headerShown: true, headerTitle: 'Products'}}
      />
    </Stack.Navigator>
  );
};

export {HomeStack};

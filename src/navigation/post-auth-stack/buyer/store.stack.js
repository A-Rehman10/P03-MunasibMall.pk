import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StoreListScreen from '../../../screens/store-list/store-list.screen';
import StoreProductScreen from '../../../screens/store-product/store-product.screen';
import {SCREENS} from '../../../constants/screens';

const Stack = createStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.STORE_LIST}>
      <Stack.Screen
        name={SCREENS.STORE_LIST}
        component={StoreListScreen}
        options={{headerShown: true, headerTitle: 'Store List'}}
      />
      <Stack.Screen
        name={SCREENS.STORE_PRODUCTS}
        component={StoreProductScreen}
        options={{headerShown: true, headerTitle: 'Store List'}}
      />
    </Stack.Navigator>
  );
};

export {StoreStack};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import StoreListScreen from '../../screens/store-list/store-list.screen';
import StoreProductScreen from '../../screens/store-product/store-product.screen';
import {SCREENS} from '../../constants/screens';
import {FontHelper} from '../../helpers';

const Stack = createStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.STORE_LIST}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.STORE_LIST}
        component={StoreListScreen}
        options={{headerTitle: 'Store List'}}
      />
      <Stack.Screen
        name={SCREENS.STORE_PRODUCTS}
        component={StoreProductScreen}
        options={{headerShown: true, headerTitle: 'Store Products'}}
      />
    </Stack.Navigator>
  );
};

export {StoreStack};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MerchantOrderListScreen from '../../../screens/merchant/get-orders/Order-list.screen';
import {SCREENS} from '../../../constants/screens';

const Stack = createStackNavigator();

const OrderStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.GET_MERCHANT_ORDERS}>
      <Stack.Screen
        name={SCREENS.GET_MERCHANT_ORDERS}
        component={MerchantOrderListScreen}
        options={{headerShown: true, headerTitle: 'Your Orders'}}
      />
    </Stack.Navigator>
  );
};

export {OrderStack};

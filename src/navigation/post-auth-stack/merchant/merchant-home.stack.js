import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MerchantProductScreen from '../../../screens/merchant/products/products.screen';
import {SCREENS} from '../../../constants/screens';
import SingleProductScreen from '../../../screens/buyer/single-product/single-product.screen';
import {FontHelper} from '../../../helpers';
import MerchantHomeScreen from '../../../screens/merchant/home/home.screen';
import CreateStoreScreen from '../../../screens/merchant/create-store/create-store.screen';
import AddProductScreen from '../../../screens/merchant/add-product/add-product.screen';

const Stack = createStackNavigator();
//title, description, actual_price, discount, store_name, category_name

const MerchantHomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MERCHANT_Home}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.MERCHANT_HOME}
        component={MerchantHomeScreen}
        options={{headerShown: true, headerTitle: 'Home'}}
      />
      <Stack.Screen
        name={SCREENS.VIEW_SINGLE_PRODUCT}
        component={SingleProductScreen}
      />
      <Stack.Screen
        name={SCREENS.CREATE_STORE}
        component={CreateStoreScreen}
        options={{headerShown: true, headerTitle: 'Create Store'}}
      />
      <Stack.Screen
        name={SCREENS.ADD_PRODUCT}
        component={AddProductScreen}
        options={{headerShown: true, headerTitle: 'Add Product'}}
      />
    </Stack.Navigator>
  );
};

export {MerchantHomeStack};

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MerchantProductScreen from '../../../screens/merchant/products/products.screen';
import {SCREENS} from '../../../constants/screens';
import {HeaderButton} from '../../../components/buttons';
import AddProductScreen from '../../../screens/merchant/add-product/add-product.screen';
import EditProductScreen from '../../../screens/merchant/edit-product/edit-product.screen';
import {FontHelper} from '../../../helpers';
import SingleProductScreen from '../../../screens/buyer/single-product/single-product.screen';

const Stack = createStackNavigator();
//title, description, actual_price, discount, store_name, category_name

const HomeStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MERCHANT_PRODUCTS}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.MERCHANT_PRODUCTS}
        component={MerchantProductScreen}
        options={{
          headerShown: true,
          headerTitle: 'My Products',
          headerRight: () => (
            <HeaderButton
              title="Add Product"
              onPress={() => navigation.navigate(SCREENS.ADD_PRODUCT)}
            />
          ),
        }}
      />
      <Stack.Screen
        name={SCREENS.ADD_PRODUCT}
        component={AddProductScreen}
        options={{headerShown: true, headerTitle: 'Add Product'}}
      />
      <Stack.Screen
        name={SCREENS.EDIT_PRODUCT}
        component={EditProductScreen}
        options={{headerShown: true, headerTitle: 'Edit Product'}}
      />
      <Stack.Screen
        name={SCREENS.VIEW_SINGLE_PRODUCT}
        component={SingleProductScreen}
      />
    </Stack.Navigator>
  );
};

export {HomeStack};

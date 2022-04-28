import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../../../screens/home/home.screen';
import {SCREENS} from '../../../constants/screens';
import ViewCategoryScreen from '../../../screens/buyer/view-category/view-category.screen';
import {FontHelper} from '../../../helpers';
import SingleProductScreen from '../../../screens/buyer/single-product/single-product.screen';
import StoreProductScreen from '../../../screens/store-product/store-product.screen';
import FilterProductScreen from '../../../screens/filter-products/filter-product.screen';
import WishListScreen from '../../../screens/buyer/wish-list/wish-list.screen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.HOME}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.HOME}
        component={HomeScreen}
        options={{headerShown: true, headerTitle: 'Home'}}
      />
      <Stack.Screen
        name={SCREENS.VIEW_CATEGORY}
        component={ViewCategoryScreen}
        // options={{headerShown: false}}
      />
      <Stack.Screen
        name={SCREENS.STORE_PRODUCTS}
        component={StoreProductScreen}
        options={{headerShown: true, headerTitle: 'Store Products'}}
      />
      <Stack.Screen
        name={SCREENS.VIEW_SINGLE_PRODUCT}
        component={SingleProductScreen}
      />
      <Stack.Screen
        name={SCREENS.VIEW_FILTER_PRODUCTS}
        component={FilterProductScreen}
        options={{headerShown: true, headerTitle: 'Products'}}
      />
      <Stack.Screen
        name={SCREENS.VIEW_WISH_LIST}
        component={WishListScreen}
        options={{headerShown: true, headerTitle: 'Your Wishlist'}}
      />
    </Stack.Navigator>
  );
};

export {HomeStack};

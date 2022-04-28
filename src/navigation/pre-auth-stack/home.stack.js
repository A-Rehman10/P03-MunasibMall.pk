import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StoreProductScreen from '../../screens/store-product/store-product.screen';
import HomeScreen from '../../screens/home/home.screen';
import {SCREENS} from '../../constants/screens';
import ViewCategoryScreen from '../../screens/buyer/view-category/view-category.screen';
import {FontHelper} from '../../helpers';
import SingleProductScreen from '../../screens/buyer/single-product/single-product.screen';
import FilterProductScreen from '../../screens/filter-products/filter-product.screen';
import WishListScreen from '../../screens/buyer/wish-list/wish-list.screen';
import {HeaderButton} from '../../components/buttons';
import {useDispatch, useSelector} from 'react-redux';
import {EMPTY_WISHLIST} from '../../redux/types';
const Stack = createStackNavigator();

const HomeStack = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishList.wishList);
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
        options={{
          headerShown: true,
          headerTitle: 'Your Wishlist',
          headerRight: () => (
            <HeaderButton
              title="Empty"
              disabled={wishlist.length === 0 ? true : false}
              onPress={() => dispatch({type: EMPTY_WISHLIST})}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export {HomeStack};

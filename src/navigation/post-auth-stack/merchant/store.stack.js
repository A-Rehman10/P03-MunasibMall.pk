import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MerchantStoreListScreen from '../../../screens/merchant/stores/stores.screen';
import StoreProductScreen from '../../../screens/store-product/store-product.screen';
import {SCREENS} from '../../../constants/screens';
import {HeaderButton} from '../../../components/buttons';
import CreateStoreScreen from '../../../screens/merchant/create-store/create-store.screen';
import EditStoreScreen from '../../../screens/merchant/edit-store/edit-store.screen';

const Stack = createStackNavigator();

const StoreStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.STORE_LIST}>
      <Stack.Screen
        name={SCREENS.STORE_LIST}
        component={MerchantStoreListScreen}
        options={{
          headerShown: true,
          headerTitle: 'Stores',
          headerRight: () => (
            <HeaderButton
              title="Create Store"
              onPress={() => navigation.navigate(SCREENS.CREATE_STORE)}
            />
          ),
        }}
      />
      <Stack.Screen
        name={SCREENS.STORE_PRODUCTS}
        component={StoreProductScreen}
        options={{headerShown: true, headerTitle: 'Store Products'}}
      />
      <Stack.Screen
        name={SCREENS.CREATE_STORE}
        component={CreateStoreScreen}
        options={{headerShown: true, headerTitle: 'Create Store'}}
      />
      <Stack.Screen
        name={SCREENS.EDIT_STORE}
        component={EditStoreScreen}
        options={{headerShown: true, headerTitle: 'Edit Store'}}
      />
    </Stack.Navigator>
  );
};

export {StoreStack};

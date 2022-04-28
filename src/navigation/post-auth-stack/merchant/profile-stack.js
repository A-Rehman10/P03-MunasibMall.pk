import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../../constants/screens';
import MerchnatProfile from '../../../screens/merchant/profile/profile.screen';
import {HeaderButton} from '../../../components/buttons';
import EditProfileScreen from '../../../screens/edit-profile/edit-profile.screen';
import ChnagePassword from '../../../screens/change-password/chnage-password.screen';
import {FontHelper} from '../../../helpers';
import AccountDetailsScreen from '../../..//screens/account-details/account-details.screen';
import SettingsScreen from '../../../screens/settings-screen/settings.screen';
import MerchantStatsScreen from '../../../screens/merchant/product-stats/stat.screen';
import MerchantOrderListScreen from '../../../screens/merchant/get-orders/Order-list.screen';
import SingleOrderScreen from '../../../screens/buyer/single-order/single-order.screen';
import ContactUsScreen from '../../../screens/contact-us/contact.screen';

const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.MERCHANT_PROFILE}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.MERCHANT_PROFILE}
        component={MerchnatProfile}
        options={{
          headerShown: true,
          headerTitle: 'Profile',
        }}
      />
      <Stack.Screen
        name={SCREENS.EDIT_PROFILE}
        component={EditProfileScreen}
        options={{headerShown: true, headerTitle: 'Edit Profile'}}
      />
      <Stack.Screen
        name={SCREENS.CHANGE_PASSWORD}
        component={ChnagePassword}
        options={{headerShown: true, headerTitle: 'Change Password'}}
      />
      <Stack.Screen
        name={SCREENS.ACCOUNT_DETAILS}
        component={AccountDetailsScreen}
        options={{
          headerShown: true,
          headerTitle: 'Account Details',
          headerRight: () => (
            <HeaderButton
              title="Edit"
              onPress={() => navigation.navigate(SCREENS.EDIT_PROFILE)}
            />
          ),
        }}
      />
      <Stack.Screen
        name={SCREENS.SETTINGS}
        component={SettingsScreen}
        options={{headerShown: true, headerTitle: 'Settings'}}
      />
      <Stack.Screen
        name={SCREENS.VIEW_STATS}
        component={MerchantStatsScreen}
        options={{headerShown: true, headerTitle: 'Product Stats'}}
      />
      <Stack.Screen
        name={SCREENS.MERCHANT_ORDER_HISTORY}
        component={MerchantOrderListScreen}
        options={{headerShown: true, headerTitle: 'Your Orders'}}
      />
      <Stack.Screen
        name={SCREENS.VIEW_SINGLE_ORDER}
        component={SingleOrderScreen}
        options={{
          headerShown: true,
          headerTitle: 'Order summary',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name={SCREENS.CONTACT_US}
        component={ContactUsScreen}
        options={{headerShown: true, headerTitle: 'Contact us'}}
      />
    </Stack.Navigator>
  );
};

export {ProfileStack};

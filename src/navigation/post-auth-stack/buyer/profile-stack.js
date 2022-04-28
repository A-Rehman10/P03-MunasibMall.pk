import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../../constants/screens';
import BuyerProfile from '../../../screens/buyer/profile/profile.screen';
import {HeaderButton} from '../../../components/buttons';
import EditProfileScreen from '../../../screens/edit-profile/edit-profile.screen';
import ChnagePassword from '../../../screens/change-password/chnage-password.screen';
import {FontHelper} from '../../../helpers';
import AccountDetailsScreen from '../../..//screens/account-details/account-details.screen';
import SettingsScreen from '../../../screens/settings-screen/settings.screen';
import ViewOrderScreen from '../../../screens/buyer/view-order/view-order.screen';
import SingleOrderScreen from '../../../screens/buyer/single-order/single-order.screen';
import ContactUsScreen from '../../../screens/contact-us/contact.screen';

const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName={SCREENS.BUYER_PROFILE}
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Stack.Screen
        name={SCREENS.BUYER_PROFILE}
        component={BuyerProfile}
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
        name={SCREENS.BUYER_ORDER_HISTORY}
        component={ViewOrderScreen}
        options={{headerShown: true, headerTitle: 'Order History'}}
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

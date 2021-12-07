import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SCREENS} from '../../../constants/screens';
import BuyerProfile from '../../../screens/buyer/profile/profile.screen';
import {HeaderButton} from '../../../components/buttons';
import EditProfileScreen from '../../../screens/edit-profile/edit-profile.screen';
import ChnagePassword from '../../../screens/change-password/chnage-password.screen';

const Stack = createStackNavigator();

const ProfileStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={SCREENS.BUYER_PROFILE}>
      <Stack.Screen
        name={SCREENS.BUYER_PROFILE}
        component={BuyerProfile}
        options={{
          headerShown: true,
          headerTitle: 'Profile',
          headerRight: () => (
            <HeaderButton
              title="Edit"
              onPress={() => navigation.navigate(SCREENS.EDIT_PROFILE)}
            />
          ),
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
    </Stack.Navigator>
  );
};

export {ProfileStack};

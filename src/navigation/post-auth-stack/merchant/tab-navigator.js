import React from 'react';
import {Image, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontHelper} from '../../../helpers';
import {COLOR} from '../../../config/color';
import {SCREENS} from '../../../constants/screens';
import {HomeStack} from './home.stack';
import {StoreStack} from './store.stack';
import {ProfileStack} from './profile-stack';
import {OrderStack} from './order.stack';
const Tab = createBottomTabNavigator();

const CartStack = () => null;
export const MerchantTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          paddingTop: 10,
          shadowColor: '#02043314',
          shadowOpacity: 1,
          shadowRadius: 4,
          shadowOffset: {width: 2, height: 2},
          height: Platform.OS === 'ios' ? 100 : 70,
        },
        headerTitleAlign: 'center',
        tabBarActiveTintColor: COLOR.RED.TOMATO,
        tabBarInactiveTintColor: COLOR.BLACK_BLUE,
        tabBarLabelStyle: FontHelper.font({
          fontSize: 10,
          marginBottom: 10,
        }),
        headerTitleStyle: FontHelper.font({
          fontSize: 20,
        }),
      }}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarLabel: 'My Products',
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{tintColor: color}}
                source={require('../../../assets/icons/product.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.STORE}
        component={StoreStack}
        options={{
          headerShown: false,
          tabBarLabel: 'My Stores',
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{tintColor: color}}
                source={require('../../../assets/bottom-tabs/store.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={SCREENS.CART}
        component={OrderStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Orders',
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{tintColor: color}}
                source={require('../../../assets/icons/shopping-bag.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={ProfileStack}
        options={{
          headerShown: false,
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color}) => {
            return (
              <Image
                style={{tintColor: color}}
                source={require('../../../assets/bottom-tabs/user.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

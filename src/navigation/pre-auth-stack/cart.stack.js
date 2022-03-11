import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButton} from '../../components/buttons';
import CartScreen from '../../screens/cart-screen/cart.screen';
import {SCREENS} from '../../constants/screens';
import {useDispatch} from 'react-redux';
import {EMPTY_CART} from '../../redux/types';
import Login from '../../screens/login/login.screen';

const Stack = createStackNavigator();

const CartStack = ({navigation}) => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName={SCREENS.HOME}>
      <Stack.Screen
        name={SCREENS.VIEW_CART}
        component={CartScreen}
        options={{
          headerShown: true,
          headerTitle: 'Cart',
          headerRight: () => (
            <HeaderButton
              title="Clear Cart"
              onPress={() => dispatch({type: EMPTY_CART})}
            />
          ),
        }}
      />
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={Login}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default CartStack;

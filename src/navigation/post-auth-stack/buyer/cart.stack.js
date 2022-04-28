import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButton} from '../../../components/buttons';
import CartScreen from '../../../screens/cart-screen/cart.screen';
import {SCREENS} from '../../../constants/screens';
import {useDispatch, useSelector} from 'react-redux';
import {EMPTY_CART} from '../../../redux/types';
import CreateOrderScreen from '../../../screens/buyer/createOrder/order.screen';
import {FontHelper} from '../../../helpers';
const Stack = createStackNavigator();

const CartStack = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
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
        name={SCREENS.VIEW_CART}
        component={CartScreen}
        options={{
          headerShown: true,
          headerTitle: 'Cart',
          headerRight: () => (
            <HeaderButton
              title="Clear Cart"
              onPress={() => dispatch({type: EMPTY_CART})}
              disabled={cart.length === 0 ? true : false}
              imageSource={require('../../../assets/icons/clear-cart.png')}
              icon={true}
            />
          ),
        }}
      />
      <Stack.Screen
        name={SCREENS.CREATE_ORDER}
        component={CreateOrderScreen}
        options={{
          headerShown: true,
          headerTitle: 'Create Order',
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;

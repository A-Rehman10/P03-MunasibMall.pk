import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderButton} from '../../components/buttons';
import CartScreen from '../../screens/cart-screen/cart.screen';
import {SCREENS} from '../../constants/screens';
import {useDispatch, useSelector} from 'react-redux';
import {EMPTY_CART} from '../../redux/types';
import Login from '../../screens/login/login.screen';
import {FontHelper} from '../../helpers';
import SignUp from '../../screens/signup/signup.screen';
import MerchnatSignUp from '../../screens/merchant/sign-up/sign-up.screen';
import BuyerSignUp from '../../screens/buyer/sign-up/sign-up.screen';

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
              disabled={cart.length === 0 ? true : false}
              onPress={() => dispatch({type: EMPTY_CART})}
              imageSource={require('../../assets/icons/clear-cart.png')}
              icon={true}
            />
          ),
        }}
      />
      <Stack.Screen
        name={SCREENS.LOGIN}
        component={Login}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name={SCREENS.SIGN_UP}
        component={SignUp}
        options={{headerShown: true, headerTitle: 'Sing Up as'}}
      />
      <Stack.Screen
        name={SCREENS.MERCHANT_SIGNUP}
        component={MerchnatSignUp}
        options={{
          headerShown: true,
          headerTitle: 'Merchant',
          headerBackTitle: 'Back',
        }}
      />
      <Stack.Screen
        name={SCREENS.BUYER_SIGNUP}
        component={BuyerSignUp}
        options={{
          headerShown: true,
          headerTitle: 'Buyer',
          headerBackTitle: 'Back',
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;

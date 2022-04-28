/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './order.style';
import {connect} from 'react-redux';
import {removeItem} from '../../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import {Text} from '../../../components/text';
import {addToCart} from '../../../redux/actions/cart.action';
import StepIndicator from 'react-native-step-indicator';
import {customStepperStyles} from '../../../config/steppers-style';
import RadioButtonRN from 'radio-buttons-react-native';
import {createOrder} from '../../../redux/actions/order.action';
import {useDispatch} from 'react-redux';
import {EMPTY_CART} from '../../../redux/types';
import AddressForm from './address.form';
import {COLOR} from '../../../config/color';

// eslint-disable-next-line no-shadow
const CreateOrderScreen = ({
  total,
  cart,
  // eslint-disable-next-line no-shadow
  createOrder,
  token,
  merchant_id,
  navigation,
}) => {
  const [paymentMethod, setPaymentMethod] = useState('Cash on Delivery (COD)');
  const [currentPosition, setCurrentPosition] = useState(0);
  const [shippingAddress, setShippingAddress] = useState({});

  const labels = ['Shipping Address', 'Payment Method', 'Confirm Order'];

  const shippingPrice = 5;
  const totalPrice = total + shippingPrice;

  const dispatch = useDispatch();

  const data = [
    {
      label: 'Cash on Delivery (COD)',
    },
  ];

  const handleShippingAddress = values => {
    setShippingAddress(values);
    setCurrentPosition(currentPosition + 1);
    console.log(shippingAddress);
  };
  const submitOrder = () => {
    let values = {
      orders: cart,
      shippingAddress,
      paymentMethod,
      shippingPrice,
    };
    createOrder(values, token);
    Alert.alert('Success', 'Your order has been created', [
      {text: 'OK', onPress: () => navigation.goBack()},
    ]);
    dispatch({type: EMPTY_CART});
  };
  console.log(shippingAddress);
  return (
    <View style={styles.screen}>
      <ScrollView style={styles.safeArea}>
        <View style={{paddingTop: 50, paddingHorizontal: 30}}>
          <StepIndicator
            customStyles={customStepperStyles}
            currentPosition={currentPosition}
            labels={labels}
            stepCount={3}
          />
        </View>
        {currentPosition === 0 ? (
          <View style={styles.shippingContainer}>
            <View>
              <Text style={styles.title}>Add Shipping Address</Text>
            </View>
            <View style={styles.addressInputContainer}>
              <AddressForm
                handleSubmit={handleShippingAddress}
                shippingAddress={shippingAddress}
              />
            </View>
          </View>
        ) : null}
        {currentPosition === 1 ? (
          <View style={{paddingTop: 60, paddingHorizontal: 20}}>
            <View>
              <Text style={styles.title}>Add Payment Method</Text>
            </View>
            <View>
              <RadioButtonRN
                data={data}
                selectedBtn={e => setPaymentMethod(e.label)}
                initial={1}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 30,
                paddingVertical: 60,
              }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                  borderColor: COLOR.ORANGE,
                  borderWidth: 1,
                  borderRadius: 8,
                }}
                onPress={() => setCurrentPosition(currentPosition - 1)}>
                <Text style={{color: COLOR.ORANGE, fontWeight: 800}}>
                  Go Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                  backgroundColor: paymentMethod
                    ? COLOR.ORANGE
                    : COLOR.GREY.MUTED,
                  borderRadius: 8,
                }}
                disabled={paymentMethod ? false : true}
                onPress={() => setCurrentPosition(currentPosition + 1)}>
                <Text style={{color: COLOR.WHITE, fontWeight: 800}}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : null}
        {currentPosition === 2 ? (
          <>
            <View style={styles.shippingPriceContainer}>
              <View style={styles.actualContainer}>
                <Text style={styles.priceText}>Shipping Price</Text>
                <Text style={styles.priceText}>{shippingPrice} $</Text>
              </View>
              <View style={styles.actualContainer}>
                <Text style={styles.priceText}>Total Price</Text>
                <Text style={styles.priceText}>{totalPrice} $</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 30,
                paddingVertical: 60,
              }}>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                  borderColor: COLOR.ORANGE,
                  borderWidth: 1,
                  borderRadius: 8,
                }}
                onPress={() => setCurrentPosition(currentPosition - 1)}>
                <Text style={{color: COLOR.ORANGE, fontWeight: 800}}>
                  Go Back
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 15,
                  backgroundColor: paymentMethod
                    ? COLOR.ORANGE
                    : COLOR.GREY.MUTED,
                  borderRadius: 8,
                }}
                disabled={paymentMethod ? false : true}
                onPress={() => submitOrder()}>
                <Text style={{color: COLOR.WHITE, fontWeight: 800}}>
                  Confirm Order
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

CreateOrderScreen.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  removeItem: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  merchant_id: PropTypes.string,
  createOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
  total: state.cart.total,
  merchant_id: state.cart.merchant_id,
  token: state.auth.token,
});

export default connect(mapStateToProps, {removeItem, addToCart, createOrder})(
  CreateOrderScreen,
);

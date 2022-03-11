import React, {useState} from 'react';
import {View, SafeAreaView, Alert} from 'react-native';
import styles from './order.style';
import {connect} from 'react-redux';
import {removeItem} from '../../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import {Text} from '../../../components/text';
import {addToCart} from '../../../redux/actions/cart.action';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {TextInput} from '../../../components/text-input';
import {FormFieldSeprator} from '../../../components/form-field-seperator';
import RadioButtonRN from 'radio-buttons-react-native';
import {createOrder} from '../../../redux/actions/order.action';
import {useDispatch} from 'react-redux';
import {EMPTY_CART} from '../../../redux/types';

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
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const shippingPrice = 5;
  const totalPrice = total + shippingPrice;

  const dispatch = useDispatch();

  const data = [
    {
      label: 'Cash on Delivery (COD)',
    },
  ];

  const shippingAddress = {
    address,
    city,
    postalCode,
    country,
  };

  const submitOrder = () => {
    let values = {
      orderItems: cart,
      shippingAddress,
      paymentMethod,
      itemsPrice: total,
      totalPrice,
      merchant_id: merchant_id,
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
      <SafeAreaView style={styles.safeArea}>
        <ProgressSteps>
          <ProgressStep label="Shipping Address">
            <View style={styles.shippingContainer}>
              <View>
                <Text style={styles.title}>Add Shipping Address</Text>
              </View>
              <View style={styles.addressInputContainer}>
                <TextInput
                  onChangeText={text => setAddress(text)}
                  placeholder={'Street address'}
                  value={address}
                />

                <FormFieldSeprator />

                <TextInput
                  onChangeText={text => setCity(text)}
                  placeholder={'Add city'}
                  value={city}
                />

                <FormFieldSeprator />

                <TextInput
                  onChangeText={text => setPostalCode(text)}
                  placeholder={'Add Postal code'}
                  value={postalCode}
                />

                <FormFieldSeprator />

                <TextInput
                  onChangeText={text => setCountry(text)}
                  placeholder={'Add Country '}
                  value={country}
                />
              </View>
            </View>
          </ProgressStep>
          <ProgressStep label="Payment Method">
            <View>
              <Text style={styles.title}>Add Payment Method</Text>
            </View>
            <View>
              <RadioButtonRN
                data={data}
                selectedBtn={e => setPaymentMethod(e.label)}
              />
            </View>
          </ProgressStep>
          <ProgressStep
            label="Complete Order"
            finishBtnText="Confirm Order"
            onSubmit={submitOrder}>
            <View style={styles.shippingPriceContainer}>
              <View style={styles.shippingPrice}>
                <Text style={styles.price}>
                  Shipping Price : {shippingPrice} $
                </Text>
              </View>
              <View style={styles.shippingPrice}>
                <Text style={styles.price}>Total Price : {totalPrice} $</Text>
              </View>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </SafeAreaView>
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

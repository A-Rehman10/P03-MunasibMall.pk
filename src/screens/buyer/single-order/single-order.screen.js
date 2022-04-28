/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {View, ScrollView, Image, TouchableOpacity, Modal} from 'react-native';
import styles from './single-order.style';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Text} from '../../../components/text';
import {addToCart} from '../../../redux/actions/cart.action';
import {PrimaryButton} from '../../../components/buttons/primary-button';
import axios from 'axios';
import {baseUrl} from '../../../redux/actions/base-url';
import {Rating} from '../../../components/rating';
import AddReviewForm from './review.form';
import {useIsFocused} from '@react-navigation/core';
import {addToWishList} from '../../../redux/actions/wishlist.action';
import StepIndicator from 'react-native-step-indicator';
import {customStepperStyles} from '../../../config/steppers-style';
import {HeaderButton} from '../../../components/buttons';
import {setAlert} from '../../../redux/actions/alert.action';
import {useDispatch} from 'react-redux';
import UpdateStatusForm from './update-status.form';

const SingleOrderScreen = ({
  token,
  route,
  navigation,
  addToCart,
  addToWishList,
  user,
}) => {
  const {order_id} = route.params;
  const [orderData, setOrder] = useState({});
  const isFocused = useIsFocused();
  const [position, setPosition] = useState(0);
  const [orderItem, setOrderItem] = useState({});
  const [shippingAddress, setShippingAddress] = useState({});
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showStatusForm, setShowStatusForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const labels = ['Confirmed', 'Dispatched', 'Delivered'];
  const items = [
    {_id: '0', name: '1'},

    {_id: '1', name: '2'},

    {_id: '2', name: '3'},

    {_id: '3', name: '4'},

    {_id: '4', name: '5'},
  ];

  const statusItems = [
    {_id: '0', name: 'Dispatched'},

    {_id: '1', name: 'Delivered'},
  ];

  const handleReviewSubmit = async values => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${baseUrl}/api/product/${orderItem._id}/add_review/${order_id}`,
        values,
        {
          headers: {
            'x-auth-token': `${token}`,
          },
        },
      );
      setLoading(false);
      if (res.status === 200) {
        setShowReviewForm(false);
        const getOrderData = async () => {
          const res = await axios.get(`${baseUrl}/api/orders/${order_id}`, {
            headers: {
              'x-auth-token': `${token}`,
            },
          });
          setOrder(res.data);
          setShippingAddress(res.data.shippingAddress);
          res.data.status.find(status => {
            if (status.statusValue === 'Confirmed') {
              setPosition(1);
            }
            if (status.statusValue === 'Dispatched') {
              setPosition(2);
            }
            if (status.statusValue === 'Delivered') {
              setPosition(3);
            }
          });
          setOrderItem(res.data.orderItem);
        };

        getOrderData();
      }
    } catch (error) {
      const errors = error.response.data.errors;
      if (errors) {
        errors.forEach(error => dispatch(setAlert(error.msg)));
      }
    }
  };

  const handleUpdateStatus = async values => {
    try {
      setLoading(true);
      const res = await axios.put(
        `${baseUrl}/api/orders/update/${order_id}`,
        values,
        {
          headers: {
            'x-auth-token': `${token}`,
          },
        },
      );
      setLoading(false);
      if (res.status === 200) {
        setShowStatusForm(false);
        const getOrderData = async () => {
          const res = await axios.get(`${baseUrl}/api/orders/${order_id}`, {
            headers: {
              'x-auth-token': `${token}`,
            },
          });
          setOrder(res.data);
          setShippingAddress(res.data.shippingAddress);
          res.data.status.find(status => {
            if (status.statusValue === 'Confirmed') {
              setPosition(1);
            }
            if (status.statusValue === 'Dispatched') {
              setPosition(2);
            }
            if (status.statusValue === 'Delivered') {
              setPosition(3);
            }
          });
          setOrderItem(res.data.orderItem);
        };

        getOrderData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getOrderData = async () => {
      const res = await axios.get(`${baseUrl}/api/orders/${order_id}`, {
        headers: {
          'x-auth-token': `${token}`,
        },
      });
      setOrder(res.data);
      setShippingAddress(res.data.shippingAddress);
      res.data.status.find(status => {
        if (status.statusValue === 'Confirmed') {
          setPosition(1);
        }
        if (status.statusValue === 'Dispatched') {
          setPosition(2);
        }
        if (status.statusValue === 'Delivered') {
          setPosition(3);
        }
      });
      setOrderItem(res.data.orderItem);
    };

    getOrderData();
  }, [order_id, isFocused, token]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        user.role === 'Merchant' ? (
          <HeaderButton
            title="Update Status"
            disabled={orderData.isDelivered === true ? true : false}
            onPress={() => setShowStatusForm(true)}
          />
        ) : (
          <HeaderButton
            disabled={
              orderData.isDelivered === true && orderData.isReviewed === false
                ? false
                : true
            }
            title="Add review"
            onPress={() => setShowReviewForm(true)}
          />
        ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, token, orderData]);

  return (
    <View style={styles.screen}>
      <View style={{paddingTop: 50, paddingHorizontal: 30}}>
        {orderData && (
          <StepIndicator
            customStyles={customStepperStyles}
            currentPosition={position}
            labels={labels}
            stepCount={3}
          />
        )}
      </View>
      <ScrollView>
        <View style={styles.priceContainer}>
          <View style={styles.actualContainer}>
            <Text style={styles.priceText}>Item Price</Text>
            <Text style={styles.priceText}>{orderItem.discounted_price}</Text>
          </View>
          <View style={styles.actualContainer}>
            <Text style={styles.priceText}>Shipping Price</Text>
            <Text style={styles.priceText}>{orderData.shippingPrice}</Text>
          </View>
          <View style={styles.actualContainer}>
            <Text style={styles.priceText}>Total Price</Text>
            <Text style={styles.priceText}>{orderData.totalPrice}</Text>
          </View>
          <View style={styles.actualContainer}>
            <Text style={styles.priceText}>Paid</Text>
            <Image
              source={
                orderData.isPaid
                  ? require('../../../assets/icons/check.png')
                  : require('../../../assets/icons/uncheck.png')
              }
            />
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.priceText}>Product Info</Text>
          </View>
          <View style={styles.actualContainer}>
            <Text style={styles.priceText}>Product Name</Text>
            <Text style={styles.priceText}>{orderItem.title}</Text>
          </View>
          <View style={styles.actualContainer}>
            <Text style={styles.priceText}>Quantity</Text>
            <Text style={styles.priceText}>{orderItem.qty}</Text>
          </View>
          <View style={styles.actualContainer}>
            <Text style={styles.priceText}>Product Image</Text>
            <Image
              source={{uri: orderItem.product_image}}
              style={{height: 40, width: 40}}
            />
          </View>
        </View>
        {user.role === 'Merchant' ? (
          <View style={styles.priceContainer}>
            <View style={{alignSelf: 'center'}}>
              <Text style={styles.priceText}>Shipping Address</Text>
            </View>
            <View style={styles.actualContainer}>
              <Text style={styles.priceText}>Address</Text>
              <Text style={styles.priceText}>{shippingAddress.address}</Text>
            </View>
            <View style={styles.actualContainer}>
              <Text style={styles.priceText}>City</Text>
              <Text style={styles.priceText}>{shippingAddress.city}</Text>
            </View>
            <View style={styles.actualContainer}>
              <Text style={styles.priceText}>Postal Code</Text>
              <Text style={styles.priceText}>{shippingAddress.postalCode}</Text>
            </View>
            <View style={styles.actualContainer}>
              <Text style={styles.priceText}>Country</Text>
              <Text style={styles.priceText}>{shippingAddress.country}</Text>
            </View>
          </View>
        ) : null}
      </ScrollView>
      <Modal
        visible={showReviewForm}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowReviewForm(false)}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setShowReviewForm(false)}>
            <Image source={require('../../../assets/icons/uncheck.png')} />
          </TouchableOpacity>
          <View style={styles.modalContainer}>
            <AddReviewForm
              ratingItems={items}
              handleSubmit={handleReviewSubmit}
              disabled={loading}
            />
          </View>
        </View>
      </Modal>
      <Modal
        visible={showStatusForm}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowStatusForm(false)}>
        <View style={styles.modalContent}>
          <TouchableOpacity onPress={() => setShowStatusForm(false)}>
            <Image source={require('../../../assets/icons/uncheck.png')} />
          </TouchableOpacity>
          <View style={styles.modalContainer}>
            <UpdateStatusForm
              statusItems={statusItems}
              handleSubmit={handleUpdateStatus}
              disabled={loading}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

SingleOrderScreen.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
});

export default connect(mapStateToProps, {addToCart, addToWishList})(
  SingleOrderScreen,
);

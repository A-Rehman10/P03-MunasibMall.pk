/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../text';
import styles from './merchant-order-item.style';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {updateOrder} from '../../redux/actions/order.action';
const MerchantOrderItem = ({_id, isDelivered, isPaid, createdAt, onPress}) => {
  const token = useSelector(state => state.auth.token);
  console.log(token);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{'' + _id}</Text>
      </View>
      <View style={styles.btnContainer}>
        {isDelivered ? (
          <Text style={styles.textDev}>Delivered</Text>
        ) : (
          <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text>Mark as delivered</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default MerchantOrderItem;

import React from 'react';
import {Text} from '../../components/text';
import {Image} from 'react-native';
import styles from './order-item.style';
import {TouchableOpacity} from 'react-native';

const OrderItem = ({onPress, orderItem}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{uri: orderItem.product_image}} style={styles.image} />
      <Text style={styles.title}>{orderItem.title}</Text>
      <Text style={styles.title}>{orderItem.qty}</Text>
    </TouchableOpacity>
  );
};

export {OrderItem};

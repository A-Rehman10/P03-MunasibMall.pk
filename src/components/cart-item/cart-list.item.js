import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './cart-item.style';
import {Text} from '../text';
const CartListItem = ({
  product_image,
  title,
  discounted_price,
  onDeleteItem,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        {product_image ? (
          <Image source={{uri: product_image}} style={styles.iconPlaceholder} />
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{title}</Text>
        <Text style={styles.textPrimary}>${discounted_price}</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={onDeleteItem}>
          <Image source={require('../../assets/icons/delete.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartListItem;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../components/text';
import styles from './item.style';

const MerchnatProductItem = ({
  onPress,
  title,
  actual_price,
  discounted_price,
  store_name,
  isLastColumn,
  onEditProduct,
  onDeleteProduct,
  product_image,
  discount,
}) => {
  return (
    <View style={[styles.container, isLastColumn ? null : styles.marginRight]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.card}>
          <View style={{alignItems: 'flex-end'}} />

          <View
            style={{
              height: 100,
              alignItems: 'center',
            }}>
            <Image
              source={{uri: product_image}}
              style={{width: 100, height: 100}}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.title}>{title}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}>
            <Text style={styles.price}>${discounted_price}</Text>
            {discount ? (
              <Text style={styles.actualPrice}>${actual_price}</Text>
            ) : null}
          </View>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.addToCart} onPress={onEditProduct}>
              <Image source={require('../../assets/icons/edit.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.addToCart}
              onPress={onDeleteProduct}>
              <Image source={require('../../assets/icons/delete.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MerchnatProductItem;

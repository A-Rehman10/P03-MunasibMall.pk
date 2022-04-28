/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Text} from '../../components/text';
import styles from './item.style';
import {Rating} from '../../components/rating';

const ProductItem = ({
  onPress,
  title,
  actual_price,
  discounted_price,
  store_name,
  isLastColumn,
  product_image,
  discount,
  addToCart,
  rating,
  removeFromWishList,
  shoWishListDeleteIcon = false,
}) => {
  return (
    <View style={[styles.container, isLastColumn ? null : styles.marginRight]}>
      {shoWishListDeleteIcon ? (
        <TouchableOpacity
          onPress={removeFromWishList}
          style={{paddingHorizontal: 3, paddingTop: 10}}>
          <Image source={require('../../assets/icons/removeWishList.png')} />
        </TouchableOpacity>
      ) : null}
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
            {/* <TouchableOpacity style={styles.addToCart} onPress={addToCart}>
              <Image source={require('../../assets/icons/add-to-cart.png')} />
            </TouchableOpacity> */}
            <Rating rating={rating} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

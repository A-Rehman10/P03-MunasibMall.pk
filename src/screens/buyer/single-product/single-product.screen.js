/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './single-product.style';
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
import AlertCmp from '../../../components/Alert/alert-banner';

const SingleProductScreen = ({
  token,
  route,
  navigation,
  addToCart,
  addToWishList,
  user,
}) => {
  const {product_id} = route.params;
  const [productData, setProduct] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    const getProductData = async () => {
      const res = await axios.get(
        `${baseUrl}/api/product/get-single/${product_id}`,
      );
      setProduct(res.data);
    };

    getProductData();
  }, [product_id, isFocused]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: productData.title,
      headerRight:
        user && user.role !== 'Merchant'
          ? () => (
              <TouchableOpacity
                style={{paddingRight: 20}}
                onPress={() => addToWishList(productData._id)}>
                <Image
                  source={require('../../../assets/icons/add-to-wishlist.png')}
                />
              </TouchableOpacity>
            )
          : null,
    });
  }, [navigation, productData.title, productData._id, addToWishList, user]);

  return (
    <View style={styles.screen}>
      <View style={{paddingTop: 30}}>
        <AlertCmp />
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: productData.product_image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{productData.description}</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Rating rating={productData.rating} />
          <Text style={styles.ratingText}>{productData.rating}</Text>
        </View>
        <View style={styles.reviewHeaderContainer}>
          <Text style={styles.reviewHeader}>Reviews</Text>
        </View>
        {productData.reviews &&
          productData.reviews.map(review => {
            return (
              <View style={styles.reviewContainer} key={review._id}>
                <View style={styles.reviewRatingContainer}>
                  <Text style={styles.userName}>{review.name}</Text>
                  <Rating rating={review.rating} />
                </View>
                <View style={styles.commentContainer}>
                  <Text style={styles.commentText}>{review.comment}</Text>
                </View>
              </View>
            );
          })}
      </ScrollView>
      <View style={styles.cartContainer}>
        <View style={styles.priceContainer}>
          <Text style={styles.discount_price}>
            ${productData.discounted_price}
          </Text>
          {productData.discount ? (
            <Text style={styles.actualPrice}>${productData.actual_price}</Text>
          ) : null}
        </View>
        {user && user.role === 'Merchant' ? null : (
          <View style={styles.cartBtn}>
            <PrimaryButton
              title="Add to Cart"
              onPress={() => addToCart(productData._id)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

SingleProductScreen.propTypes = {
  token: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  addToWishList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  token: state.auth.token,
  user: state.auth.user,
});

export default connect(mapStateToProps, {addToCart, addToWishList})(
  SingleProductScreen,
);

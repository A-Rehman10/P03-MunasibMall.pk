/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './home.style';
import {connect} from 'react-redux';
import {getProducts} from '../../../redux/actions/product.action';
import PropTypes from 'prop-types';
import {addToCart} from '../../../redux/actions/cart.action';
import {Text} from '../../../components/text';
import {baseUrl} from '../../../redux/actions/base-url';
import {SCREENS} from '../../../constants/screens';
import ProductItem from '../../../components/product-item/product-item';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/core';

const MerchantHomeScreen = ({
  // eslint-disable-next-line no-shadow
  getProducts,
  // eslint-disable-next-line no-shadow
  addToCart,
  allProducts: {products, loading},
  navigation,
  user,
  token,
}) => {
  const [popularProducts, setPopularProducts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const getYourPopularProducts = async () => {
      const res = await axios.get(
        `${baseUrl}/api/product/your-product/popular`,
        {
          headers: {
            'x-auth-token': `${token}`,
          },
        },
      );
      setPopularProducts(res.data);
    };
    getYourPopularProducts();
  }, [isFocused, token]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcome}>Welcome Back</Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>
      <ScrollView
        style={{paddingHorizontal: 20, paddingVertical: 30, paddingBottom: 20}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(SCREENS.CREATE_STORE)}>
          <Text style={styles.btnText}>Create Store</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate(SCREENS.ADD_PRODUCT)}>
          <Text style={styles.btnText}>Create Product</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.storeContainer}>
        <Text style={styles.storeHeader}>Your Top Rated Products</Text>
      </View>
      <ScrollView>
        <View style={styles.categoriesContent}>
          {popularProducts &&
            popularProducts.map(product => {
              return (
                <View
                  style={{paddingHorizontal: 2, paddingBottom: 15}}
                  key={product._id}>
                  <ProductItem
                    {...product}
                    onPress={() =>
                      navigation.navigate(SCREENS.VIEW_SINGLE_PRODUCT, {
                        product_id: product._id,
                      })
                    }
                  />
                </View>
              );
            })}
        </View>
      </ScrollView>
    </ScrollView>
  );
};

MerchantHomeScreen.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.object,
};

const mapStateToProps = state => ({
  allProducts: state.product,
  user: state.auth.user,
  token: state.auth.token,
});

export default connect(mapStateToProps, {getProducts, addToCart})(
  MerchantHomeScreen,
);

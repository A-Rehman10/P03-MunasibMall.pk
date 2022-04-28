/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect, useEffect, useState} from 'react';
import {View, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './store-info.style';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Text} from '../../components/text';
import {addToCart} from '../../redux/actions/cart.action';
import {PrimaryButton} from '../../components/buttons/primary-button';
import axios from 'axios';
import {baseUrl} from '../../redux/actions/base-url';
import {useIsFocused} from '@react-navigation/core';
import {addToWishList} from '../../redux/actions/wishlist.action';
import ProductItem from '../../components/product-item/product-item';
import {SCREENS} from '../../constants/screens';

const StoreInfoScreen = ({
  token,
  route,
  navigation,
  addToCart,
  addToWishList,
}) => {
  const {store_id} = route.params;
  const [productData, setProduct] = useState([]);
  const [storeData, setStoreData] = useState({});
  const isFocused = useIsFocused();

  useEffect(() => {
    const getStoreData = async () => {
      const res = await axios.get(
        `${baseUrl}/api/store/get_single/${store_id}`,
      );
      setStoreData(res.data);
    };
    const getProductData = async () => {
      const res = await axios.get(
        `${baseUrl}/api/store/feature-products/${store_id}`,
      );
      setProduct(res.data);
    };
    getStoreData();

    getProductData();
  }, [store_id, isFocused]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: storeData.name,
    });
  }, [navigation, storeData.name, storeData._id, addToWishList]);

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.container}>
        <View style={{paddingHorizontal: 20}}>
          <View style={styles.imageContainer}>
            <Image source={{uri: storeData.store_image}} style={styles.image} />
          </View>
          <View style={styles.storeHeaderContainer}>
            <Text style={styles.storeHeader}>About</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </View>

        <View style={styles.storeContainer}>
          <Text style={styles.storeHeader}>Feature Products</Text>
        </View>
        <View style={styles.categoriesContent}>
          {productData &&
            productData.map(product => {
              return (
                <View
                  style={{paddingHorizontal: 2, paddingBottom: 10}}
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
      <View style={{paddingHorizontal: 40, paddingVertical: 20}}>
        <PrimaryButton
          title="View all"
          onPress={() =>
            navigation.navigate(SCREENS.STORE_PRODUCTS, {store_id: store_id})
          }
        />
      </View>
    </View>
  );
};

StoreInfoScreen.propTypes = {
  token: PropTypes.string,
  addToCart: PropTypes.func.isRequired,
  addToWishList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, {addToCart, addToWishList})(
  StoreInfoScreen,
);

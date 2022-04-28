/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, ScrollView, TouchableOpacity, Image} from 'react-native';
import styles from './home.style';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions/product.action';
import PropTypes from 'prop-types';
import {SliderBox} from 'react-native-image-slider-box';
import {addToCart} from '../../redux/actions/cart.action';
import {Text} from '../../components/text';
import {CategoryItem} from '../../components/category_item';
import {baseUrl} from '../../redux/actions/base-url';
import {SCREENS} from '../../constants/screens';
import ProductItem from '../../components/product-item/product-item';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/core';

const HomeScreen = ({
  // eslint-disable-next-line no-shadow
  getProducts,
  // eslint-disable-next-line no-shadow
  addToCart,
  allProducts: {products, loading},
  navigation,
}) => {
  const [sliderWidth, setSliderWidth] = useState();
  const [categories, setCategories] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [discountedProducts, setDiscountProducts] = useState([]);
  const isFocused = useIsFocused();
  let images = [
    require('../../assets/images/watch.jpeg'),
    require('../../assets/images/dove.jpeg'),
    require('../../assets/images/headphones.jpeg'),
    require('../../assets/images/nike.jpeg'),
  ];

  useEffect(() => {
    getCategoryData();
    getStoresData();
    getDiscountedProductsData();
  }, [isFocused]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{paddingRight: 20}}
          onPress={() => navigation.navigate(SCREENS.VIEW_FILTER_PRODUCTS)}>
          <Image source={require('../../assets/icons/search.png')} />
        </TouchableOpacity>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{paddingLeft: 20}}
          onPress={() => navigation.navigate(SCREENS.VIEW_WISH_LIST)}>
          <Image source={require('../../assets/icons/wishlist.png')} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const getCategoryData = async () => {
    const res = await axios.get(`${baseUrl}/api/category`);
    setCategories(res.data);
  };

  const getStoresData = async () => {
    const res = await axios.get(`${baseUrl}/api/product/get_popular`);
    let titles = [];
    titles = res.data.map(pd => pd.title);
    console.log(titles);
    setPopularProducts(res.data);
  };

  const getDiscountedProductsData = async () => {
    const res = await axios.get(`${baseUrl}/api/product/get_popular/discount`);
    setDiscountProducts(res.data);
  };
  return (
    <ScrollView style={styles.container}>
      <View
        onLayout={e => setSliderWidth(e.nativeEvent.layout.width)}
        style={styles.sliderContainer}>
        <SliderBox
          autoplay
          circleLoop
          images={images}
          sliderBoxHeight={400}
          onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
          parentWidth={sliderWidth}
        />
      </View>
      <View style={styles.storeContainer}>
        <Text style={styles.storeHeader}>Top Rated Products</Text>
      </View>
      <ScrollView horizontal>
        <View style={styles.categoriesContent}>
          {popularProducts &&
            popularProducts.map(product => {
              return (
                <View style={{paddingHorizontal: 2}} key={product._id}>
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

      <View style={styles.storeContainer}>
        <Text style={styles.storeHeader}>Top Discounted Products</Text>
      </View>

      <ScrollView horizontal>
        <View style={styles.categoriesContent}>
          {discountedProducts &&
            discountedProducts.map(product => {
              return (
                <View style={{paddingHorizontal: 2}} key={product._id}>
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

      <View style={styles.storeContainer}>
        <Text style={styles.storeHeader}>Categories</Text>
      </View>
      <View style={styles.categoriesContent}>
        {categories &&
          categories.map(category => {
            return (
              <View style={{width: '32%'}} key={category._id}>
                <CategoryItem
                  {...category}
                  onPress={() =>
                    navigation.navigate(SCREENS.VIEW_CATEGORY, {
                      name: category.name,
                      _id: category._id,
                    })
                  }
                />
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

HomeScreen.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.object,
};

const mapStateToProps = state => ({
  allProducts: state.product,
});

export default connect(mapStateToProps, {getProducts, addToCart})(HomeScreen);

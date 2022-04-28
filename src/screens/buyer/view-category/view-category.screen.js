import React, {useLayoutEffect, useEffect, useState} from 'react';
import {View, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from './view-category.style';
import {connect} from 'react-redux';
import {removeItem} from '../../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import ProductItem from '../../../components/product-item/product-item';
import {Text} from '../../../components/text';
import {addToCart} from '../../../redux/actions/cart.action';
import {NotFound} from '../../../components/not-found';
import {SCREENS} from '../../../constants/screens';
import axios from 'axios';
import {baseUrl} from '../../../redux/actions/base-url';
import {SliderBox} from 'react-native-image-slider-box';
import {SearchbarCustom} from '../../../components/search-bar';
import {COLOR} from '../../../config/color';
import {useIsFocused} from '@react-navigation/core';

const ViewCategoryScreen = ({
  total,
  cart,
  // eslint-disable-next-line no-shadow
  removeItem,
  // eslint-disable-next-line no-shadow
  addToCart,
  navigation,
  token,
  route,
}) => {
  const {name, _id} = route.params;
  const [productData, setProduct] = useState([]);
  const [sliderWidth, setSliderWidth] = useState();
  const [searchProduct, setSearchProduct] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const isFocused = useIsFocused();

  let fashionImages = [
    require('../../../assets/images/fashion_1.jpeg'),
    require('../../../assets/images/fashion_2.jpeg'),
    require('../../../assets/images/fashion_3.jpeg'),
    require('../../../assets/images/fashion_4.jpeg'),
  ];

  let shoesImages = [
    require('../../../assets/images/shoes_1.jpeg'),
    require('../../../assets/images/shoes_2.jpeg'),
    require('../../../assets/images/shoes_3.jpeg'),
    require('../../../assets/images/shoes_4.jpeg'),
  ];

  let clothImages = [
    require('../../../assets/images/cloth_1.jpeg'),
    require('../../../assets/images/cloth_2.jpeg'),
    require('../../../assets/images/cloth_3.jpeg'),
    require('../../../assets/images/cloth_4.jpeg'),
  ];

  let mobileImages = [
    require('../../../assets/images/mobile_1.jpeg'),
    require('../../../assets/images/mobile_2.jpeg'),
    require('../../../assets/images/mobile_3.jpeg'),
    require('../../../assets/images/mobile_4.jpeg'),
  ];

  let computerImages = [
    require('../../../assets/images/computer_1.jpeg'),
    require('../../../assets/images/computer_2.jpeg'),
    require('../../../assets/images/computer_3.jpeg'),
    require('../../../assets/images/computer_4.jpeg'),
  ];
  let electronicImages = [
    require('../../../assets/images/electronic_1.jpeg'),
    require('../../../assets/images/electronic_2.jpeg'),
    require('../../../assets/images/electronic_3.jpeg'),
    require('../../../assets/images/electronic_4.jpeg'),
  ];

  useEffect(() => {
    const getProductData = async () => {
      const res = await axios.get(
        `${baseUrl}/api/product/get_by_category/${_id}?searchProduct=${searchProduct}`,
      );
      setProduct(res.data);
    };
    getProductData();
  }, [_id, searchProduct, isFocused]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerRight: () => (
        <TouchableOpacity onPress={() => setShowSearch(!showSearch)}>
          {showSearch ? (
            // eslint-disable-next-line react-native/no-inline-styles
            <Text style={{marginRight: 30, color: COLOR.PRIMARY}}>
              Hide searchbar
            </Text>
          ) : (
            <Image
              source={require('../../../assets/icons/search.png')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 30, height: 30, marginRight: 30}}
            />
          )}
        </TouchableOpacity>
      ),
    });
  }, [navigation, name, showSearch]);
  return (
    <View style={styles.container}>
      <View
        onLayout={e => setSliderWidth(e.nativeEvent.layout.width)}
        style={styles.sliderContainer}>
        <SliderBox
          autoplay
          circleLoop
          images={
            name === 'Shoes'
              ? shoesImages
              : name === 'Computer and Laptops'
              ? computerImages
              : name === 'Mobiles'
              ? mobileImages
              : name === 'Electronics'
              ? electronicImages
              : name === 'Clothes'
              ? clothImages
              : name === 'Beauty and Fashion'
              ? fashionImages
              : null
          }
          sliderBoxHeight={400}
          onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
          parentWidth={sliderWidth}
        />
      </View>
      {showSearch ? (
        <SearchbarCustom
          onSearchPress={() => setSearchProduct(searchProduct)}
          onChangeText={text => setSearchProduct(text)}
          placeholder="Search Product by title"
          handleOnClearPress={() => setSearchProduct('')}
        />
      ) : null}
      <View style={styles.contentContainer}>
        {productData.length === 0 ? (
          <NotFound message="No products found" />
        ) : (
          <FlatList
            numColumns={2}
            data={productData}
            style={styles.list}
            keyExtractor={item => item._id}
            contentContainerStyle={styles.listContentContainer}
            renderItem={({item, index: productIndex}) => {
              return (
                <ProductItem
                  {...item}
                  addToCart={() => addToCart(item._id)}
                  onPress={() =>
                    navigation.navigate(SCREENS.VIEW_SINGLE_PRODUCT, {
                      product_id: item._id,
                    })
                  }
                  isLastColumn={productIndex % 2 !== 0}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
        )}
      </View>
    </View>
  );
};

ViewCategoryScreen.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  removeItem: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
  total: state.cart.total,
  token: state.auth.token,
});

export default connect(mapStateToProps, {removeItem, addToCart})(
  ViewCategoryScreen,
);

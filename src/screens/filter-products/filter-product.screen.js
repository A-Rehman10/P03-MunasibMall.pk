import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import ProductItem from '../../components/product-item/product-item';
import styles from './filter-product.style';
import {connect} from 'react-redux';
import {getStoreProductList} from '../../redux/actions/store.action';
import {addToCart} from '../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import {SearchbarCustom} from '../../components/search-bar';
import {SCREENS} from '../../constants/screens';
import axios from 'axios';
import {baseUrl} from '../../redux/actions/base-url';
import {PopOverMenuModal} from '../../components/pop-over-menu/pop-over-menu';

const FilterProductScreen = ({
  // eslint-disable-next-line no-shadow
  getStoreProductList,
  // eslint-disable-next-line no-shadow
  addToCart,
  route,
  navigation,
  allProducts: {stores_products, loading},
}) => {
  const items = [
    {label: 'All', value: ''},
    {label: 'Price ( Lowest to High )', value: 1},
    {label: 'Price ( Highest to Low )', value: -1},
    {label: 'Rating ( Lowest to High )', value: 1},
    {label: 'Rating ( Highest to Low )', value: -1},
  ];
  const [searchProduct, setSearchProduct] = useState('');
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    label: 'All',
    value: '',
  });
  const [rating, setRating] = useState('');
  const [priceRange, setPriceRange] = useState('');

  useEffect(() => {
    const getProductData = async () => {
      const res = await axios.get(
        `${baseUrl}/api/product/getAll/filter?searchProduct=${searchProduct}&rating=${rating}&priceRange=${priceRange}`,
      );
      setProducts(res.data);
    };
    getProductData();
  }, [priceRange, rating, searchProduct]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{paddingRight: 20}}
          onPress={() => setOpen(true)}>
          <Image source={require('../../assets/icons/filter.png')} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const onSelectFilter = filter => {
    if (filter.label === 'All') {
      setPriceRange('');
      setRating('');
      setSelectedFilter(filter);
    }
    if (filter.label === 'Price ( Lowest to High )') {
      setPriceRange(filter.value);
      setRating('');
      setSelectedFilter(filter);
    }
    if (filter.label === 'Price ( Highest to Low )') {
      setPriceRange(filter.value);
      setRating('');
      setSelectedFilter(filter);
    }
    if (filter.label === 'Rating ( Lowest to High )') {
      setRating(filter.value);
      setPriceRange('');
      setSelectedFilter(filter);
    }
    if (filter.label === 'Rating ( Highest to Low )') {
      setRating(filter.value);
      setPriceRange('');
      setSelectedFilter(filter);
      console.log('Filter', selectedFilter);
    }
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <SearchbarCustom
        onSearchPress={() => setSearchProduct(searchProduct)}
        onChangeText={text => setSearchProduct(text)}
        placeholder="Search Product by title"
        handleOnClearPress={() => setSearchProduct('')}
      />
      <View style={styles.contentContainer}>
        <FlatList
          numColumns={2}
          data={products}
          style={styles.list}
          contentContainerStyle={styles.listContentContainer}
          keyExtractor={item => item._id}
          renderItem={({item, index: productIndex}) => {
            return (
              <ProductItem
                onPress={() =>
                  navigation.navigate(SCREENS.VIEW_SINGLE_PRODUCT, {
                    product_id: item._id,
                  })
                }
                {...item}
                isLastColumn={productIndex % 2 !== 0}
                addToCart={() => addToCart(item._id)}
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        />
      </View>
      <PopOverMenuModal
        open={open}
        selectedFilter={selectedFilter}
        onPress={onSelectFilter}
        onClose={() => setOpen(false)}
        items={items}
        icon={true}
      />
    </View>
  );
};

FilterProductScreen.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allProducts: state.merchant_store,
});

export default connect(mapStateToProps, {getStoreProductList, addToCart})(
  FilterProductScreen,
);

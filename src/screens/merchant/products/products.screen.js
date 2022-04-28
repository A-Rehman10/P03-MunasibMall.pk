/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, FlatList, TouchableOpacity, Image} from 'react-native';
import MerchnatProductItem from '../../../components/merchant-product-item/merchant-product-item';
import styles from './products.style';
import {connect} from 'react-redux';
import {
  deleteProduct,
  getYourProducts,
} from '../../../redux/actions/product.action';
import PropTypes from 'prop-types';
import {SearchbarCustom} from '../../../components/search-bar';
import {SCREENS} from '../../../constants/screens';
import {useIsFocused} from '@react-navigation/core';
import {PopOverMenuModal} from '../../../components/pop-over-menu/pop-over-menu';
import {NotFound} from '../../../components/not-found/';
const MerchantProductScreen = ({
  // eslint-disable-next-line no-shadow
  getYourProducts,
  // eslint-disable-next-line no-shadow
  deleteProduct,
  allProducts: {products, loading},
  token,
  navigation,
}) => {
  const items = [
    {label: 'All', value: ''},
    {label: 'Electronics', value: 'Electronics'},
    {label: 'Shoes', value: 'Shoes'},
    {label: 'Computer & Laptops', value: 'Computer and Laptops'},
    {label: 'Mobiles', value: 'Mobiles'},
    {label: 'Clothes', value: 'Clothes'},
    {label: 'Beauty & Fashion', value: 'Beauty and Fashion'},
  ];
  const [searchProduct, setSearchProduct] = useState('');
  const [open, setOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState({
    label: 'All',
    value: '',
  });

  const onSelectFilter = filter => {
    setSelectedFilter(filter);
    setOpen(false);
  };

  const categoryName = selectedFilter.value;
  const isFocused = useIsFocused();
  useEffect(() => {
    getYourProducts(searchProduct, categoryName, token);
  }, [getYourProducts, searchProduct, token, isFocused, categoryName]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{paddingLeft: 20}}
          onPress={() => setOpen(true)}>
          <Image source={require('../../../assets/icons/filter.png')} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <SearchbarCustom
        onSearchPress={() => setSearchProduct(searchProduct)}
        onChangeText={text => setSearchProduct(text)}
        placeholder="Search Product by title"
        handleOnClearPress={() => setSearchProduct('')}
      />
      <View style={styles.contentContainer}>
        {products.length === 0 ? (
          <NotFound message="Products not found" />
        ) : (
          <FlatList
            numColumns={2}
            data={products}
            style={styles.list}
            contentContainerStyle={styles.listContentContainer}
            keyExtractor={item => item._id}
            renderItem={({item, index: productIndex}) => {
              return (
                <MerchnatProductItem
                  onPress={() =>
                    navigation.navigate(SCREENS.VIEW_SINGLE_PRODUCT, {
                      product_id: item._id,
                    })
                  }
                  {...item}
                  isLastColumn={productIndex % 2 !== 0}
                  onDeleteProduct={() => deleteProduct(item._id, token)}
                  onEditProduct={() =>
                    navigation.navigate(SCREENS.EDIT_PRODUCT, {
                      _id: item._id,
                      title: item.title,
                      store_name: item.store_name,
                      category_name: item.category_name,
                      actual_price: item.actual_price,
                      discount: item.discount,
                      description: item.description,
                      product_image: item.product_image,
                    })
                  }
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
        )}
        <PopOverMenuModal
          open={open}
          selectedFilter={selectedFilter}
          onPress={onSelectFilter}
          onClose={() => setOpen(false)}
          items={items}
        />
      </View>
    </View>
  );
};

MerchantProductScreen.propTypes = {
  getYourProducts: PropTypes.func.isRequired,
  products: PropTypes.object,
  deleteProduct: PropTypes.func.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  allProducts: state.product,
  token: state.auth.token,
});

export default connect(mapStateToProps, {getYourProducts, deleteProduct})(
  MerchantProductScreen,
);

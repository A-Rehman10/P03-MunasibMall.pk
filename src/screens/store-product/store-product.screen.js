import React, {useEffect, useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import ProductItem from '../../components/product-item/product-item';
import styles from './store-product.style';
import {connect} from 'react-redux';
import {getStoreProductList} from '../../redux/actions/store.action';
import {addToCart} from '../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import {SearchbarCustom} from '../../components/search-bar';
import {SCREENS} from '../../constants/screens';

const StoreProductScreen = ({
  // eslint-disable-next-line no-shadow
  getStoreProductList,
  // eslint-disable-next-line no-shadow
  addToCart,
  route,
  navigation,
  allProducts: {stores_products, loading},
}) => {
  const [searchProduct, setSearchProduct] = useState('');
  const store_id = route.params.store_id;
  console.log(store_id);
  useEffect(() => {
    getStoreProductList(searchProduct, store_id);
  }, [getStoreProductList, searchProduct, store_id]);
  return (
    <View style={styles.container}>
      <SearchbarCustom
        onSearchPress={() => setSearchProduct(searchProduct)}
        onChangeText={text => setSearchProduct(text)}
        placeholder="Search Product by title"
      />
      <View style={styles.contentContainer}>
        <FlatList
          numColumns={2}
          data={stores_products}
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
    </View>
  );
};

StoreProductScreen.propTypes = {
  getStoreProductList: PropTypes.func.isRequired,
  allProducts: PropTypes.object,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  allProducts: state.merchant_store,
});

export default connect(mapStateToProps, {getStoreProductList, addToCart})(
  StoreProductScreen,
);

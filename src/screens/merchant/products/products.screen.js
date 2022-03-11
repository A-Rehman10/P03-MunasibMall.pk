import React, {useEffect, useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
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

const MerchantProductScreen = ({
  // eslint-disable-next-line no-shadow
  getYourProducts,
  // eslint-disable-next-line no-shadow
  deleteProduct,
  allProducts: {products, loading},
  token,
  navigation,
}) => {
  const [searchProduct, setSearchProduct] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    getYourProducts(searchProduct, token);
  }, [getYourProducts, searchProduct, token, isFocused]);
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
          data={products}
          style={styles.list}
          contentContainerStyle={styles.listContentContainer}
          keyExtractor={item => item._id}
          renderItem={({item, index: productIndex}) => {
            return (
              <MerchnatProductItem
                onPress={() => Alert.alert(item._id)}
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

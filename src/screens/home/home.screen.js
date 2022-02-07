import React, {useEffect, useState} from 'react';
import {View, FlatList, Alert} from 'react-native';
import ProductItem from '../../components/product-item/product-item';
import styles from './home.style';
import {connect} from 'react-redux';
import {getProducts} from '../../redux/actions/product.action';
import PropTypes from 'prop-types';
import {SearchbarCustom} from '../../components/search-bar';
import {addToCart} from '../../redux/actions/cart.action';
const HomeScreen = ({
  // eslint-disable-next-line no-shadow
  getProducts,
  // eslint-disable-next-line no-shadow
  addToCart,
  allProducts: {products, loading},
}) => {
  const [searchProduct, setSearchProduct] = useState('');
  useEffect(() => {
    getProducts(searchProduct);
  }, [getProducts, searchProduct]);
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
              <ProductItem
                onPress={() => Alert.alert(item._id)}
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

HomeScreen.propTypes = {
  getProducts: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  products: PropTypes.object,
};

const mapStateToProps = state => ({
  allProducts: state.product,
});

export default connect(mapStateToProps, {getProducts, addToCart})(HomeScreen);

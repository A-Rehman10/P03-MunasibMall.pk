/* eslint-disable no-shadow */
import React from 'react';
import {View, FlatList} from 'react-native';
import ProductItem from '../../../components/product-item/product-item';
import styles from './wish-list.style';
import {connect} from 'react-redux';
import {
  addToWishList,
  removeFromWishList,
} from '../../../redux/actions/wishlist.action';
import PropTypes from 'prop-types';
import {SCREENS} from '../../../constants/screens';
import {NotFound} from '../../../components/not-found';

const WishListScreen = ({
  addToWishList,
  wishList,
  navigation,
  removeFromWishList,
}) => {
  return (
    <View style={styles.container}>
      {wishList.length === 0 ? (
        <NotFound message="You hav not added any product to your wishlist" />
      ) : (
        <View style={styles.contentContainer}>
          <FlatList
            numColumns={2}
            data={wishList}
            style={styles.list}
            contentContainerStyle={styles.listContentContainer}
            keyExtractor={item => item._id}
            renderItem={({item, index: productIndex}) => {
              return (
                <ProductItem
                  shoWishListDeleteIcon={true}
                  removeFromWishList={() => removeFromWishList(item._id)}
                  onPress={() =>
                    navigation.navigate(SCREENS.VIEW_SINGLE_PRODUCT, {
                      product_id: item._id,
                    })
                  }
                  {...item}
                  isLastColumn={productIndex % 2 !== 0}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
        </View>
      )}
    </View>
  );
};

WishListScreen.propTypes = {
  wishList: PropTypes.array,
  addToWishList: PropTypes.func.isRequired,
  removeFromWishList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  wishList: state.wishList.wishList,
});

export default connect(mapStateToProps, {addToWishList, removeFromWishList})(
  WishListScreen,
);

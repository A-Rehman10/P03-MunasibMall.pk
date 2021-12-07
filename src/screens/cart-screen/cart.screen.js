import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styles from './cart.style';
import {connect} from 'react-redux';
import {removeItem} from '../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import CartListItem from '../../components/cart-item/cart-list.item';
import {Text} from '../../components/text';

// eslint-disable-next-line no-shadow
const CartScreen = ({total, cart, removeItem}) => {
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
          <FlatList
            data={cart}
            style={styles.list}
            keyExtractor={item => item._id}
            contentContainerStyle={styles.listContentContainer}
            renderItem={({item}) => {
              return (
                <CartListItem
                  {...item}
                  key={item._id}
                  onDeleteItem={() => removeItem(item._id)}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
          <View style={styles.total}>
            <Text style={styles.price}>Sub Total: $ {total}</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

CartScreen.propTypes = {
  cart: PropTypes.array,
  total: PropTypes.number,
  removeItem: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
  total: state.cart.total,
});

export default connect(mapStateToProps, {removeItem})(CartScreen);

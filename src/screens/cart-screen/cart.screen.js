import React from 'react';
import {View, FlatList, SafeAreaView, Alert} from 'react-native';
import styles from './cart.style';
import {connect} from 'react-redux';
import {removeItem} from '../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import CartListItem from '../../components/cart-item/cart-list.item';
import {Text} from '../../components/text';
import {addToCart} from '../../redux/actions/cart.action';
import {BorderButton} from '../../components/buttons/border-button';
import {SCREENS} from '../../constants/screens';

// eslint-disable-next-line no-shadow
const CartScreen = ({
  total,
  cart,
  removeItem,
  addToCart,
  navigation,
  token,
}) => {
  const navigateToCreateOrder = () => {
    navigation.navigate(SCREENS.CREATE_ORDER);
  };
  const navigateToLogin = () => {
    navigation.navigate(SCREENS.LOGIN);
  };
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
                  addToCart={() => addToCart(item._id)}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
          <View style={styles.total}>
            <Text style={styles.price}>Sub Total: $ {total}</Text>
          </View>
          <View style={styles.checkoutButton}>
            <BorderButton
              title="Proceed to checkout"
              onPress={token ? navigateToCreateOrder : navigateToLogin}
            />
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
  addToCart: PropTypes.func.isRequired,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: state.cart.cart,
  total: state.cart.total,
  token: state.auth.token,
});

export default connect(mapStateToProps, {removeItem, addToCart})(CartScreen);

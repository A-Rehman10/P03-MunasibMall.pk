import React from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styles from './cart.style';
import {connect} from 'react-redux';
import {removeItem} from '../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import CartListItem from '../../components/cart-item/cart-list.item';
import {Text} from '../../components/text';
import {addToCart} from '../../redux/actions/cart.action';
import {PrimaryButton} from '../../components/buttons/primary-button';
import {SCREENS} from '../../constants/screens';
import {NotFound} from '../../components/not-found';

const CartScreen = ({
  total,
  cart,
  // eslint-disable-next-line no-shadow
  removeItem,
  // eslint-disable-next-line no-shadow
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
      {cart.length === 0 ? (
        <NotFound message="You have'nt add any product yet" />
      ) : (
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
              ItemSeparatorComponent={() => (
                <View style={styles.itemSeperator} />
              )}
            />
            <View style={styles.checkoutButtonContainer}>
              <View style={styles.total}>
                <Text style={styles.price}>Sub Total: $ {total}</Text>
              </View>
              <View style={styles.checkoutButton}>
                <PrimaryButton
                  title="Proceed to checkout"
                  onPress={token ? navigateToCreateOrder : navigateToLogin}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      )}
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

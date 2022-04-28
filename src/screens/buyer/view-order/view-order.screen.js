/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, useWindowDimensions, FlatList} from 'react-native';
import styles from './view-order.style';
import {connect} from 'react-redux';
import {removeItem} from '../../../redux/actions/cart.action';
import PropTypes from 'prop-types';
import {Text} from '../../../components/text';
import {addToCart} from '../../../redux/actions/cart.action';
import {baseUrl} from '../../../redux/actions/base-url';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLOR} from '../../../config/color';
import axios from 'axios';
import {OrderItem} from '../../../components/order-item';
import {SCREENS} from '../../../constants/screens';
import {useIsFocused} from '@react-navigation/core';

const ViewOrderScreen = ({
  // eslint-disable-next-line no-shadow
  removeItem,
  // eslint-disable-next-line no-shadow
  addToCart,
  navigation,
  token,
}) => {
  const [ordersToDeliver, setOrdersToDeliver] = useState([]);
  const [ordersToReview, setOrdersToReview] = useState([]);
  const [reviewedOrders, setOrdersReviewed] = useState([]);
  const layout = useWindowDimensions();
  const isFocused = useIsFocused();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(
          `${baseUrl}/api/orders/customer/pending/get`,
          {
            headers: {
              'x-auth-token': `${token}`,
            },
          },
        );
        setOrdersToDeliver(res.data);

        const response = await axios.get(
          `${baseUrl}/api/orders/customer/unreviewed`,
          {
            headers: {
              'x-auth-token': `${token}`,
            },
          },
        );
        setOrdersToReview(response.data);

        const reviewed = await axios.get(
          `${baseUrl}/api/orders/customer/reviewed`,
          {
            headers: {
              'x-auth-token': `${token}`,
            },
          },
        );
        setOrdersReviewed(reviewed.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [token, isFocused]);

  const forDeliver = () => {
    return (
      <View style={styles.contentContainer}>
        <FlatList
          data={ordersToDeliver}
          style={styles.list}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContentContainer}
          renderItem={({item}) => {
            return (
              <OrderItem
                orderItem={item.orderItem}
                key={item._id}
                onPress={() =>
                  navigation.navigate(SCREENS.VIEW_SINGLE_ORDER, {
                    order_id: item._id,
                  })
                }
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        />
      </View>
    );
  };

  const forReview = () => {
    return (
      <View style={styles.contentContainer}>
        <FlatList
          data={ordersToReview}
          style={styles.list}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContentContainer}
          renderItem={({item}) => {
            return (
              <OrderItem
                orderItem={item.orderItem}
                key={item._id}
                onPress={() =>
                  navigation.navigate(SCREENS.VIEW_SINGLE_ORDER, {
                    order_id: item._id,
                  })
                }
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        />
      </View>
    );
  };
  const forReviewed = () => {
    return (
      <View style={styles.contentContainer}>
        <FlatList
          data={reviewedOrders}
          style={styles.list}
          keyExtractor={item => item._id}
          contentContainerStyle={styles.listContentContainer}
          renderItem={({item}) => {
            return (
              <OrderItem
                orderItem={item.orderItem}
                key={item._id}
                onPress={() =>
                  navigation.navigate(SCREENS.VIEW_SINGLE_ORDER, {
                    order_id: item._id,
                  })
                }
              />
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
        />
      </View>
    );
  };

  const renderScene = SceneMap({
    forDeliver: forDeliver,
    forReview: forReview,
    forReviewed: forReviewed,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'forDeliver', title: 'To Deliver'},
    {key: 'forReview', title: 'To Review'},
    {key: 'forReviewed', title: 'Reviewed'},
  ]);

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            style={{
              backgroundColor: COLOR.ORANGE,
              borderBottomColor: COLOR.GREY.MUTED,
              borderBottomWidth: 2,
            }}
            indicatorStyle={{
              backgroundColor: COLOR.GREY.DARK,
              height: 4,
              // left: TAB_MARGIN / 2,
            }}
          />
        )}
      />
    </View>
  );
};

ViewOrderScreen.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  token: state.auth.token,
});

export default connect(mapStateToProps, {removeItem, addToCart})(
  ViewOrderScreen,
);

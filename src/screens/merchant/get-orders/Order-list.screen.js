/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView, useWindowDimensions} from 'react-native';
import styles from './Order-list.style';
import {connect} from 'react-redux';
import {
  getMerchantCompletedOrders,
  getMerchantPendingOrders,
  updateOrder,
} from '../../../redux/actions/order.action';
import PropTypes from 'prop-types';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {COLOR} from '../../../config/color';
import {SCREENS} from '../../../constants/screens';
import {OrderItem} from '../../../components/order-item';
import {useIsFocused} from '@react-navigation/core';

const MerchantOrderListScreen = ({
  navigation,
  // eslint-disable-next-line no-shadow
  getMerchantCompletedOrders,
  // eslint-disable-next-line no-shadow
  getMerchantPendingOrders,
  // eslint-disable-next-line no-shadow
  updateOrder,
  merchantPendingOrders,
  merchantCompletedOrders,
  token,
}) => {
  const isFocused = useIsFocused();
  useEffect(() => {
    getMerchantCompletedOrders(token);
    getMerchantPendingOrders(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);
  const layout = useWindowDimensions();

  const pendingOrders = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
          <FlatList
            data={merchantPendingOrders}
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
      </SafeAreaView>
    );
  };

  const completedOrders = () => {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
          <FlatList
            data={merchantCompletedOrders}
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
      </SafeAreaView>
    );
  };

  const renderScene = SceneMap({
    pending: pendingOrders,
    complete: completedOrders,
    ad: completedOrders,
  });
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'pending', title: 'Pending'},
    {key: 'complete', title: 'Completed'},
  ]);
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={props => (
            <TabBar
              {...props}
              style={{backgroundColor: COLOR.ORANGE}}
              indicatorStyle={{
                backgroundColor: COLOR.GREY.DARK,
                height: 4,
                // left: TAB_MARGIN / 2,
              }}
            />
          )}
        />
      </SafeAreaView>
    </View>
  );
};

MerchantOrderListScreen.propTypes = {
  getMerchantCompletedOrders: PropTypes.func.isRequired,
  getMerchantPendingOrders: PropTypes.func.isRequired,
  merchantCompletedOrders: PropTypes.array,
  merchantPendingOrders: PropTypes.array,
  token: PropTypes.string,
  updateOrder: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  merchantPendingOrders: state.orders.merchantPendingOrders,
  merchantCompletedOrders: state.orders.merchantCompletedOrders,
  token: state.auth.token,
});

export default connect(mapStateToProps, {
  getMerchantCompletedOrders,
  getMerchantPendingOrders,
  updateOrder,
})(MerchantOrderListScreen);

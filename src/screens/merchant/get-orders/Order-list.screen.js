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
import {TabView, SceneMap} from 'react-native-tab-view';
import {Text} from '../../../components/text';
import MerchantOrderItem from '../../../components/merchantOrder/merchant-order-item';

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
  useEffect(() => {
    getMerchantCompletedOrders(token);
    getMerchantPendingOrders(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const layout = useWindowDimensions();

  const handleUpdateOrder = id => {
    updateOrder(id, token);
    getMerchantCompletedOrders(token);
  };

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
                <MerchantOrderItem
                  {...item}
                  key={item._id}
                  onPress={() => handleUpdateOrder(item._id)}
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
                <MerchantOrderItem
                  {...item}
                  key={item._id}
                  // onPress={handleUpdateOrder(item._id)}
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

import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styles from './stores.style';
import {connect} from 'react-redux';
import {
  getYourStoresList,
  deleteStore,
} from '../../../redux/actions/store.action';
import PropTypes from 'prop-types';
import {SearchbarCustom} from '../../../components/search-bar';
import MerchantStoresListItem from '../../../components/merchant-store-ltem/merchant-store.item';
import {SCREENS} from '../../../constants/screens';
import {useIsFocused} from '@react-navigation/core';

const MerchantStoreListScreen = ({
  // eslint-disable-next-line no-shadow
  getYourStoresList,
  // eslint-disable-next-line no-shadow
  deleteStore,
  navigation,
  allStores: {stores, loading},
  token,
}) => {
  const [searchStore, setSearchStore] = useState('');
  const isFocused = useIsFocused();
  useEffect(() => {
    getYourStoresList(searchStore, token);
  }, [getYourStoresList, searchStore, token, isFocused]);

  return (
    <View style={styles.screen}>
      <SearchbarCustom
        onSearchPress={() => setSearchStore(searchStore)}
        onChangeText={text => setSearchStore(text)}
        placeholder="Search store by name"
      />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.contentContainer}>
          <FlatList
            data={stores}
            style={styles.list}
            keyExtractor={item => item._id}
            contentContainerStyle={styles.listContentContainer}
            renderItem={({item}) => {
              return (
                <MerchantStoresListItem
                  {...item}
                  key={item._id}
                  onDeleteStore={() => deleteStore(item._id, token)}
                  onEditStore={() => {
                    navigation.navigate(SCREENS.EDIT_STORE, {
                      _id: item._id,
                      name: item.name,
                      store_image: item.store_image,
                      store_city: item.store_city,
                    });
                  }}
                />
              );
            }}
            ItemSeparatorComponent={() => <View style={styles.itemSeperator} />}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

MerchantStoreListScreen.propTypes = {
  getYourStoresList: PropTypes.func.isRequired,
  deleteStore: PropTypes.func.isRequired,
  storesList: PropTypes.object,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  allStores: state.merchant_store,
  token: state.auth.token,
});

export default connect(mapStateToProps, {getYourStoresList, deleteStore})(
  MerchantStoreListScreen,
);

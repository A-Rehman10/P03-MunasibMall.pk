import React, {useEffect, useState} from 'react';
import {View, FlatList, SafeAreaView} from 'react-native';
import styles from './store-list.style';
import {connect} from 'react-redux';
import {getStoresList} from '../../redux/actions/store.action';
import PropTypes from 'prop-types';
import {SearchbarCustom} from '../../components/search-bar';
import StoresListItem from '../../components/store-list-item/store-list.item';
import {SCREENS} from '../../constants/screens';

const StoreListScreen = ({
  // eslint-disable-next-line no-shadow
  getStoresList,
  navigation,
  allStores: {stores, loading},
}) => {
  const [searchStore, setSearchStore] = useState('');
  const [search, setSearch] = useState('');
  useEffect(() => {
    getStoresList(searchStore);
  }, [getStoresList, searchStore]);
  return (
    <View style={styles.screen}>
      <SearchbarCustom
        onSearchPress={() => setSearchStore(search)}
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
                <StoresListItem
                  {...item}
                  onPress={() =>
                    navigation.navigate(SCREENS.STORE_PRODUCTS, {
                      store_id: item._id,
                    })
                  }
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

StoreListScreen.propTypes = {
  getStoresList: PropTypes.func.isRequired,
  storesList: PropTypes.object,
};

const mapStateToProps = state => ({
  allStores: state.merchant_store,
});

export default connect(mapStateToProps, {getStoresList})(StoreListScreen);

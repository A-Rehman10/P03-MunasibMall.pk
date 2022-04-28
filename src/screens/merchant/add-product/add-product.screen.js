import React, {useEffect, useState} from 'react';
import AddProductForm from './add-product.form';
import {Loader} from '../../../components/loader';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {getYourStoresList} from '../../../redux/actions/store.action';
import {addProduct} from '../../../redux/actions/product.action';
import axios from 'axios';
import {baseUrl} from '../../../redux/actions/base-url';
import {NotFound} from '../../../components/not-found';

const AddProductScreen = ({
  // eslint-disable-next-line no-shadow
  addProduct,
  // eslint-disable-next-line no-shadow
  getYourStoresList,
  loading,
  token,
  stores,
  navigation,
}) => {
  const [categories, setCategories] = useState([]);
  const onSubmit = values => {
    console.log(values, token);

    addProduct(values, token);
    navigation.goBack();
  };
  let searchStore = '';
  useEffect(() => {
    getYourStoresList(searchStore, token);
    getCategoryData();
  }, [getYourStoresList, searchStore, token]);

  const getCategoryData = async () => {
    const res = await axios.get(`${baseUrl}/api/category`);
    console.log('Cate', res.data);
    setCategories(res.data);
  };
  // console.log('stores are ', stores);

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {stores.length === 0 ? (
        <NotFound message="Create your store first" />
      ) : (
        <AddProductForm
          handleSubmit={onSubmit}
          store_items={stores}
          category_items={categories}
          disabled={loading}
        />
      )}
    </View>
  );
};

AddProductScreen.propTypes = {
  addProduct: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  token: PropTypes.string,
  getYourStoresList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.merchant_store.loading,
  token: state.auth.token,
  stores: state.merchant_store.stores,
});

export default connect(mapStateToProps, {addProduct, getYourStoresList})(
  AddProductScreen,
);

import React, {useEffect, useState} from 'react';
import EditProductForm from './edit-product.form';
import {Loader} from '../../../components/loader';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getYourStoresList} from '../../../redux/actions/store.action';
import {editProduct} from '../../../redux/actions/product.action';
import axios from 'axios';
import {baseUrl} from '../../../redux/actions/base-url';

const EditProductScreen = ({
  // eslint-disable-next-line no-shadow
  editProduct,
  // eslint-disable-next-line no-shadow
  getYourStoresList,
  loading,
  token,
  stores,
  navigation,
  route,
}) => {
  const [categories, setCategories] = useState([]);
  const {
    _id,
    title,
    store_name,
    category_name,
    actual_price,
    discount,
    description,
    product_image,
  } = route.params;
  console.log('My params', route.params);
  const onSubmit = values => {
    console.log(_id, values, token);

    editProduct(_id, values, token);
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
    <>
      <EditProductForm
        handleSubmit={onSubmit}
        store_items={stores}
        category_items={categories}
        title={title}
        store_name={store_name}
        category_name={category_name}
        actual_price={actual_price}
        discount={discount}
        product_image={product_image}
        description={description}
        disabled={loading}
      />
    </>
  );
};

EditProductScreen.propTypes = {
  editProduct: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  token: PropTypes.string,
  getYourStoresList: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  loading: state.merchant_store.loading,
  token: state.auth.token,
  stores: state.merchant_store.stores,
});

export default connect(mapStateToProps, {editProduct, getYourStoresList})(
  EditProductScreen,
);

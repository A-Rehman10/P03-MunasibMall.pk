import React from 'react';
import CreateStoreForm from './create-store.form';
import {Loader} from '../../../components/loader';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createStore} from '../../../redux/actions/store.action';

// eslint-disable-next-line no-shadow
const CreateStoreScreen = ({createStore, loading, token}) => {
  const onSubmit = values => {
    console.log(values, token);
    const {store_name, store_city, store_image} = values;

    createStore(store_name, store_city, store_image, token);
  };

  return (
    <>{loading ? <Loader /> : <CreateStoreForm handleSubmit={onSubmit} />}</>
  );
};

CreateStoreScreen.propTypes = {
  createStore: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  loading: state.merchant_store.loading,
  token: state.auth.token,
});

export default connect(mapStateToProps, {createStore})(CreateStoreScreen);

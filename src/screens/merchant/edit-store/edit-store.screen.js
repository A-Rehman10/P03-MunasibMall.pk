import React from 'react';
import EditStoreForm from './edit-store.form';
import {Loader} from '../../../components/loader';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {editStore} from '../../../redux/actions/store.action';

// eslint-disable-next-line no-shadow
const EditStoreScreen = ({editStore, loading, token, route}) => {
  const {_id, name, store_image, store_city} = route.params;
  console.log(route.params);
  const onSubmit = values => {
    console.log(values, token);

    editStore(_id, values, token);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <EditStoreForm
          handleSubmit={onSubmit}
          name={name}
          store_image={store_image}
          store_city={store_city}
        />
      )}
    </>
  );
};

EditStoreScreen.propTypes = {
  editStore: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  token: PropTypes.string,
};

const mapStateToProps = state => ({
  loading: state.merchant_store.loading,
  token: state.auth.token,
});

export default connect(mapStateToProps, {editStore})(EditStoreScreen);

import React from 'react';
import EditProfileForm from './edit-profile.form';
import {Loader} from '../../components/loader';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {editProfile} from '../../redux/actions/auth.action';

// eslint-disable-next-line no-shadow
const EditProfileScreen = ({editProfile, loading, token, user, navigation}) => {
  const onSubmit = values => {
    console.log(values);
    editProfile(values, token);
    navigation.goBack();
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <EditProfileForm
          handleSubmit={onSubmit}
          profileUrl={user.profile_image}
          name={user.name}
          phone_number={user.phone_number}
        />
      )}
    </>
  );
};

EditProfileScreen.propTypes = {
  editProfile: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  token: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = state => ({
  loading: state.merchant_store.loading,
  token: state.auth.token,
  user: state.auth.user,
});

export default connect(mapStateToProps, {editProfile})(EditProfileScreen);

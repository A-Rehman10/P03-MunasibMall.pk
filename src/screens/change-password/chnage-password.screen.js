import React from 'react';
import ChangePasswordForm from './change_password-form';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeAccountPassword} from '../../redux/actions/auth.action';

const ChangePassword = ({
  // eslint-disable-next-line no-shadow
  changeAccountPassword,
  token,
  loading,
}) => {
  const onSubmit = values => {
    console.log(values);
    const {oldPassword, newPassword} = values;

    changeAccountPassword(oldPassword, newPassword, token);
    // navigation.goBack();
  };

  return <ChangePasswordForm handleSubmit={onSubmit} disabled={loading} />;
};

ChangePassword.propTypes = {
  changeAccountPassword: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  token: PropTypes.string,
  chnagePasswordSuccess: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
  token: state.auth.token,
});

export default connect(mapStateToProps, {changeAccountPassword})(
  ChangePassword,
);

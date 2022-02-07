import React from 'react';
import {View} from 'react-native';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './chnage-password.style';
import * as Yup from 'yup';
import AppFormField from '../../components/form-components/form-field';
import FormSubmitButton from '../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../components/form-field-seperator';
import AlertCmp from '../../components/Alert/alert-banner';

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Old password is required'),
  newPassword: Yup.string().required('New password is required'),
});
const ChnagePasswordForm = ({handleSubmit}) => {
  const initialValues = {
    oldPassword: '',
    newPassword: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <View style={styles.container}>
        <AlertCmp />
        <FormFieldSeprator />
        <Field
          component={AppFormField}
          name="oldPassword"
          placeholder="Your old password"
          secureTextEntry
          textContentType="password"
        />

        <FormFieldSeprator />

        <Field
          component={AppFormField}
          name="newPassword"
          placeholder="New Password"
          secureTextEntry
          textContentType="password"
        />
        <FormFieldSeprator />
        <FormSubmitButton title="Save" />
      </View>
    </Formik>
  );
};

export default ChnagePasswordForm;

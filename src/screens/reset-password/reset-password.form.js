import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './reset-password.style';
import * as Yup from 'yup';
import AppFormField from '../../components/form-components/form-field';
import FormSubmitButton from '../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../components/form-field-seperator';
import AlertCmp from '../../components/Alert/alert-banner';
import {COLOR} from '../../config/color';

const validationSchema = Yup.object().shape({
  password: Yup.string().required('Password is required'),
  confirmPassword: Yup.string().when('password', {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      'Both password need to be the same',
    ),
  }),
});
const ResetPasswordForm = ({handleSubmit, disabled}) => {
  const initialValues: formValues = {resetCode: ''};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <View style={styles.container}>
        <AlertCmp />
        <Field
          component={AppFormField}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <FormFieldSeprator />

        <Field
          component={AppFormField}
          name="confirmPassword"
          placeholder="Confirm Password"
          secureTextEntry
          textContentType="password"
        />

        <FormFieldSeprator />

        <FormSubmitButton
          title={
            disabled ? (
              <ActivityIndicator animating={true} color={COLOR.WHITE} />
            ) : (
              'Reset'
            )
          }
          disabled={disabled}
        />
      </View>
    </Formik>
  );
};

export default ResetPasswordForm;

import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './forgot-password.style';
import * as Yup from 'yup';
import AppFormField from '../../components/form-components/form-field';
import FormSubmitButton from '../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../components/form-field-seperator';
import AlertCmp from '../../components/Alert/alert-banner';
import {Text} from '../../components/text';
import {COLOR} from '../../config/color';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
});
const ForogotPasswordForm = ({handleSubmit, disabled}) => {
  const initialValues: formValues = {email: ''};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <View style={styles.container}>
        <View style={styles.userEmailContainer}>
          <Text>
            Please use Your email to get instructions on resetting a password
          </Text>
        </View>
        <AlertCmp />
        <Field
          component={AppFormField}
          name="email"
          placeholder="Enter your email"
        />

        <FormFieldSeprator />

        <FormSubmitButton
          title={
            disabled ? (
              <ActivityIndicator animating={true} color={COLOR.WHITE} />
            ) : (
              'Send'
            )
          }
          disabled={disabled}
        />

        <FormFieldSeprator />
      </View>
    </Formik>
  );
};

export default ForogotPasswordForm;

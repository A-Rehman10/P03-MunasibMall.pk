import React from 'react';
import {View} from 'react-native';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './verification.style';
import * as Yup from 'yup';
import AppFormField from '../../components/form-components/form-field';
import FormSubmitButton from '../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../components/form-field-seperator';

const validationSchema = Yup.object().shape({
  otpCode: Yup.string().required('OTP is required'),
});
const VerificationForm = ({handleSubmit}) => {
  const initialValues: formValues = {otpCode: ''};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <View style={styles.container}>
        <Field component={AppFormField} name="otpCode" placeholder="otp code" />

        <FormFieldSeprator />

        <FormSubmitButton title="Verify OTP" />
      </View>
    </Formik>
  );
};

export default VerificationForm;

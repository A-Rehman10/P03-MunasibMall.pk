import React from 'react';
import {View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './verify-reset-password.style';
import * as Yup from 'yup';
import AppFormField from '../../components/form-components/form-field';
import FormSubmitButton from '../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../components/form-field-seperator';
import AlertCmp from '../../components/Alert/alert-banner';
import {Text} from '../../components/text';
import {COLOR} from '../../config/color';

const validationSchema = Yup.object().shape({
  resetCode: Yup.string().required('OTP is required'),
});
const VerifyPasswordForm = ({
  handleSubmit,
  disabled,
  userEmail,
  handleResendOtp,
  resendLoading,
}) => {
  const initialValues: formValues = {resetCode: ''};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <View style={styles.container}>
        <View style={styles.userEmailContainer}>
          <Text>Please use Your otp code which we have sent on</Text>
          <Text>{userEmail}</Text>
        </View>
        <AlertCmp />
        <Field
          component={AppFormField}
          name="resetCode"
          placeholder="Enter otp code"
        />

        <FormFieldSeprator />

        <FormSubmitButton
          title={
            disabled ? (
              <ActivityIndicator animating={true} color={COLOR.WHITE} />
            ) : (
              'Verify Otp'
            )
          }
          disabled={disabled}
        />

        <FormFieldSeprator />

        <View style={styles.resendContainer}>
          <Text>Did'nt get an OTP ?</Text>
          <TouchableOpacity onPress={handleResendOtp} disabled={resendLoading}>
            {resendLoading ? (
              <ActivityIndicator animating={true} color={COLOR.BLUE[500]} />
            ) : (
              <Text style={styles.resendBtnText}>Resend</Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Formik>
  );
};

export default VerifyPasswordForm;

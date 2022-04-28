/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './verification.style';
import * as Yup from 'yup';
import AppFormField from '../../components/form-components/form-field';
import FormSubmitButton from '../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../components/form-field-seperator';
import AlertCmp from '../../components/Alert/alert-banner';
import {Text} from '../../components/text';
import {COLOR} from '../../config/color';

const validationSchema = Yup.object().shape({
  otpCode: Yup.string().required('OTP is required'),
});
const VerificationForm = ({
  handleSubmit,
  handleResendOtp,
  userEmail,
  disabled,
}) => {
  const initialValues: formValues = {otpCode: ''};
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <View style={styles.container}>
        <View style={styles.userEmailContainer}>
          <Text>Please use otp code which we have sent on your email</Text>
          <Text style={{color: COLOR.BLUE[500], fontWeight: 700}}>
            {userEmail}
          </Text>
        </View>
        <AlertCmp />
        <Field
          component={AppFormField}
          name="otpCode"
          placeholder="Enter otp code here"
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
          <TouchableOpacity onPress={handleResendOtp}>
            <Text style={styles.resendBtnText}>Resend</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Formik>
  );
};

export default VerificationForm;

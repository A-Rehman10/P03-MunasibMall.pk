import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../components/text';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './login.style';
import * as Yup from 'yup';
import AppFormField from '../../components/form-components/form-field';
import FormSubmitButton from '../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../components/form-field-seperator';
import AlertCmp from '../../components/Alert/alert-banner';
import {BorderButton} from '../../components/buttons';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required'),
});
const LoginForm = ({
  navigateToForgot,
  navigateToSignUp,
  handleSubmit,
  handleBiometric,
  isTouchIdEnabled,
}) => {
  const initialValues = {
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={loginSchema}>
      <View style={styles.container}>
        <Text style={styles.logo}>Munasib Mall</Text>

        <AlertCmp />
        <FormFieldSeprator />
        <Field
          component={AppFormField}
          name="email"
          placeholder="Email"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <FormFieldSeprator />

        <Field
          component={AppFormField}
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />

        <FormFieldSeprator />

        <TouchableOpacity onPress={navigateToForgot}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <FormFieldSeprator />
        <FormSubmitButton title="Login" />
        <FormFieldSeprator />
        <TouchableOpacity onPress={navigateToSignUp}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        <FormFieldSeprator />
        {isTouchIdEnabled ? (
          <BorderButton
            title="login with FingerPrint"
            onPress={handleBiometric}
          />
        ) : null}
      </View>
    </Formik>
  );
};

export default LoginForm;

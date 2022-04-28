import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
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
import {COLOR} from '../../config/color';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required'),
});
const LoginForm = ({
  navigateToForgot,
  navigateToSignUp,
  handleSubmit,
  disabled,
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
        <ScrollView
          contentContainerStyle={{
            backgroundColor: COLOR.WHITE,
            justifyContent: 'center',
            paddingTop: 100,
            // paddingHorizontal: 30,
            // paddingBottom: 20,
          }}>
          <Image
            source={require('../../assets/logos/logo.png')}
            style={styles.logo}
          />

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
          <FormSubmitButton
            title={
              disabled ? (
                <ActivityIndicator animating={true} color={COLOR.WHITE} />
              ) : (
                'Login'
              )
            }
            disabled={disabled}
          />
          <FormFieldSeprator />
          <TouchableOpacity onPress={navigateToSignUp}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>

          <FormFieldSeprator />
        </ScrollView>
      </View>
    </Formik>
  );
};

export default LoginForm;

import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../../components/text';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './sign-up.style';
import * as Yup from 'yup';
import AppFormField from '../../../components/form-components/form-field';
import FormSubmitButton from '../../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../../components/form-field-seperator';
const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone_number: Yup.string().required('Phone Number is required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is required'),
});
const SignUpForm = ({navigateToLogin, navigateToSignUp, handleSubmit}) => {
  const initialValues = {
    name: '',
    phone_number: '',
    email: '',
    password: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={signUpSchema}>
      <View style={styles.container}>
        <Text style={styles.logo}>Munasib Mall</Text>
        <Field
          component={AppFormField}
          name="name"
          placeholder="Your name"
          autoCompleteType="email"
        />

        <FormFieldSeprator />

        <Field
          component={AppFormField}
          name="phone_number"
          placeholder="Phone Number"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />

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

        <FormSubmitButton title="Sign Up" />

        <FormFieldSeprator />

        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.login}>Go for Login</Text>
        </TouchableOpacity>
      </View>
    </Formik>
  );
};

export default SignUpForm;

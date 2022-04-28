import React from 'react';
import {View} from 'react-native';
import {Field} from 'formik';
import {Formik} from 'formik';
import styles from './order.style';
import * as Yup from 'yup';
import AppFormField from '../../../components/form-components/form-field';
import FormSubmitButton from '../../../components/form-components/form-submit-button';
import {FormFieldSeprator} from '../../../components/form-field-seperator';

const validationSchema = Yup.object().shape({
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  postalCode: Yup.string().required('Postal code is required'),
  country: Yup.string().required('Country is required'),
});
const AddressForm = ({handleSubmit, shippingAddress}) => {
  const initialValues: formValues = {
    address: shippingAddress.address,
    city: shippingAddress.city,
    postalCode: shippingAddress.postalCode,
    country: shippingAddress.country,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <View style={styles.container}>
        <Field
          component={AppFormField}
          name="address"
          placeholder="Add street Address"
        />

        <FormFieldSeprator />
        <Field component={AppFormField} name="city" placeholder="Add city" />

        <FormFieldSeprator />
        <Field
          component={AppFormField}
          name="postalCode"
          placeholder="Add post code"
        />

        <FormFieldSeprator />
        <Field
          component={AppFormField}
          name="country"
          placeholder="Add country"
        />

        <FormFieldSeprator />

        <FormSubmitButton title="Next" />

        <FormFieldSeprator />
      </View>
    </Formik>
  );
};

export default AddressForm;

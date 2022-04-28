import React from 'react';
import {View} from 'react-native';
import styles from './single-product.style';
import {Field} from 'formik';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppFormField from '../../../components/form-components/form-field';
import FormSubmitButton from '../../../components/form-components/form-submit-button';
import SelectPickerField from '../../../components/form-components/select-picker';
import {FormFieldSeprator} from '../../../components/form-field-seperator';

const validationSchema = Yup.object().shape({
  comment: Yup.string().required('Review is require'),
  rating: Yup.string().required('Rating is required'),
});

const AddReviewForm = ({handleSubmit, ratingItems}) => {
  const initialValues = {
    comment: '',
    rating: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}>
      <View style={styles.reviewFormContainer}>
        <Field
          component={AppFormField}
          name="comment"
          placeholder="Add your review"
        />

        <FormFieldSeprator />

        <Field
          component={SelectPickerField}
          name="rating"
          placeholder="Select rating"
          items={ratingItems}
        />

        <FormFieldSeprator />

        <FormSubmitButton title="Add Your review" />
      </View>
    </Formik>
  );
};
export default AddReviewForm;

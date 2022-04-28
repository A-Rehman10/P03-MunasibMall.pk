import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './single-order.style';
import {Field} from 'formik';
import {Formik} from 'formik';
import * as Yup from 'yup';
import FormSubmitButton from '../../../components/form-components/form-submit-button';
import SelectPickerField from '../../../components/form-components/select-picker';
import {FormFieldSeprator} from '../../../components/form-field-seperator';
import AlertCmp from '../../../components/Alert/alert-banner';
import {COLOR} from '../../../config/color';

const validationSchema = Yup.object().shape({
  statusValue: Yup.string().required('Status is required'),
});

const UpdateStatusForm = ({handleSubmit, statusItems, disabled}) => {
  const initialValues = {
    statusValue: '',
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      enableReinitialize={true}>
      <View style={styles.reviewFormContainer}>
        <AlertCmp />

        <FormFieldSeprator />

        <Field
          component={SelectPickerField}
          name="statusValue"
          placeholder="Select Status"
          items={statusItems}
        />

        <FormFieldSeprator />

        <FormSubmitButton
          title={
            disabled ? (
              <ActivityIndicator animating={true} color={COLOR.WHITE} />
            ) : (
              'Update Status'
            )
          }
          disabled={disabled}
        />
      </View>
    </Formik>
  );
};
export default UpdateStatusForm;

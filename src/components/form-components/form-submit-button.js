import React from 'react';
import {useFormikContext} from 'formik';
import {PrimaryButton} from '../buttons';

const FormSubmitButton = ({title}) => {
  const {handleSubmit} = useFormikContext();
  return <PrimaryButton title={title} onPress={handleSubmit} />;
};

export default FormSubmitButton;

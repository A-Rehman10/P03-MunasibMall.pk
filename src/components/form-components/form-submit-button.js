import React from 'react';
import {useFormikContext} from 'formik';
import {PrimaryButton} from '../buttons';

const FormSubmitButton = ({title, disabled}) => {
  const {handleSubmit} = useFormikContext();
  return (
    <PrimaryButton title={title} onPress={handleSubmit} disabled={disabled} />
  );
};

export default FormSubmitButton;

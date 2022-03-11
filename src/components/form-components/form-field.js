import React from 'react';
import {ErrorBanner} from '../error-banner';
import {TextInput} from '../text-input';

const AppFormField = props => {
  const {
    placeholder,
    field: {name, onBlur, onChange, value},
    form: {errors, touched, setFieldTouched},
    ...inputProps
  } = props;
  const hasError = errors[name] && touched[name];
  return (
    <>
      <TextInput
        placeholder={placeholder}
        onChangeText={text => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        hasError={hasError}
        {...inputProps}
      />
      {hasError && <ErrorBanner error={errors[name]} />}
    </>
  );
};

export default AppFormField;

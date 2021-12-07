import React from 'react';
import {ErrorBanner} from '../../components/error-banner';
import {Select} from '../../components/select';
import {useFormikContext} from 'formik';
import {View} from 'react-native';

const SelectPickerField = props => {
  const {
    field: {name, onBlur, value},
    form: {errors, touched, setFieldTouched},
    placeholder,
    items,
  } = props;
  const hasError = errors[name] && touched[name];
  const {setFieldValue} = useFormikContext();
  return (
    <View>
      <Select
        onDonePress={val => {
          setFieldValue(name, val);
          console.log('Value  is that', val);
        }}
        hasError={hasError}
        onBlur={() => {
          setFieldTouched(name);
          onBlur(name);
        }}
        placeholder={placeholder}
        value={value}
        options={items}
      />
      {hasError && <ErrorBanner error={errors[name]} />}
    </View>
  );
};

export default SelectPickerField;

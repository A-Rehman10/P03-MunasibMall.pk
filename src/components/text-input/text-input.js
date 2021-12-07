import React from 'react';
import {View, TextInput as RNTextInput, TextInputProps} from 'react-native';
import styles from './text-input-style';
import {COLOR} from '../../config/color';

const TextInput: React.FC<TextInputProps> = ({
  onChange,
  onBlur,
  placeholder,
  hasError,
  ...rest
}) => {
  return (
    <View style={hasError ? styles.hasError : styles.inputView}>
      <RNTextInput
        style={styles.inputText}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        {...rest}
        placeholderTextColor={COLOR.BLUE_GREY}
      />
    </View>
  );
};
export {TextInput};

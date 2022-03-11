import React from 'react';
import {Text} from '../../../components/text';
import styles from './primary-button.style';
import {TouchableOpacity} from 'react-native';

const PrimaryButton = ({onPress, title, ...rest}) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPress} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export {PrimaryButton};

import React from 'react';
import {Text} from '../../../components/text';
import styles from './border-button.style';
import {TouchableOpacity} from 'react-native';

const BorderButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export {BorderButton};

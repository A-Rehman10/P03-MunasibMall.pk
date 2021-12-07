import React from 'react';
import {Text} from '../../../components/text';
import styles from './header-button.style';
import {TouchableOpacity} from 'react-native';

const HeaderButton = ({onPress, title}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export {HeaderButton};

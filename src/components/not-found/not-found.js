import React from 'react';
import {View} from 'react-native';
import {Text} from '../text';
import styles from './not-found.style';

const NotFound = ({message}) => {
  return (
    <View style={styles.notFound}>
      <Text style={styles.notFoundText}>{message}</Text>
    </View>
  );
};

export {NotFound};

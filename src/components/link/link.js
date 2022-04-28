import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../text';
import styles from './link.style';

const Link = ({primary = true, destructive, text, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      hitSlop={{
        top: 10,
        bottom: 10,
        left: 10,
        right: 10,
      }}>
      <Text
        style={[
          styles.link,
          primary ? styles.primary : styles.danger,
          destructive ? styles.destructive : undefined,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export {Link};

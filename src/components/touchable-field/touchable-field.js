import React from 'react';
import {View} from 'react-native';
import {Text} from '../../components/text';
import {Touchable} from '../../components/touchable';
import styles from './touchable-field.style';

const TouchableField = ({
  placeholder,
  value,
  disabled,
  hasError,
  onPress,
  icon,
}) => {
  return (
    <Touchable disabled={disabled} onPress={onPress}>
      <View
        style={
          hasError
            ? styles.hasError
            : [styles.container, disabled && styles.disabled]
        }>
        <View style={styles.contentContainer}>
          <View style={styles.flexContainer}>
            {value ? (
              <Text numberOfLines={1} style={styles.value}>
                {value}
              </Text>
            ) : (
              <Text numberOfLines={1} style={styles.placeholder}>
                {placeholder}
              </Text>
            )}
          </View>
          <View>{icon}</View>
        </View>
      </View>
    </Touchable>
  );
};

export {TouchableField};

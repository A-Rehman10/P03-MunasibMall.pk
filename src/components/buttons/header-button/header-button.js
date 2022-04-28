import React from 'react';
import {Text} from '../../../components/text';
import {Image} from 'react-native';
import styles from './header-button.style';
import {TouchableOpacity} from 'react-native';

const HeaderButton = ({
  onPress,
  title,
  disabled,
  imageSource,
  icon = false,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}>
      {icon ? (
        <Image source={imageSource} />
      ) : (
        <Text style={disabled ? styles.disabled : styles.buttonText}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export {HeaderButton};

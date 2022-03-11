import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './store-item.style';
import {Text} from '../text';
const StoresListItem = ({store_image, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        {store_image ? (
          <Image source={{uri: store_image}} style={styles.iconPlaceholder} />
        ) : (
          <View style={styles.iconPlaceholder} />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textPrimary}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default StoresListItem;

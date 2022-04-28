import React from 'react';
import {Text} from '../text';
import styles from './store_item.style';
import {TouchableOpacity, Image} from 'react-native';

const PopularStoreItem = ({onPress, name, store_image}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: store_image}}
        style={{width: 200, height: 100, marginBottom: 15}}
        resizeMode="cover"
      />
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export {PopularStoreItem};

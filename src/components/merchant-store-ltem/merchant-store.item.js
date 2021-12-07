import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import styles from './merchant-store-item.style';
import {Text} from '../text';
const MerchantStoresListItem = ({
  store_image,
  name,
  onPress,
  onEditStore,
  onDeleteStore,
}) => {
  return (
    <View style={styles.container}>
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
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={onEditStore}>
          <Image source={require('../../assets/icons/edit.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onDeleteStore}>
          <Image source={require('../../assets/icons/delete.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MerchantStoresListItem;

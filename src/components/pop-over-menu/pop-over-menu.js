import React from 'react';
import {View, Modal, TouchableOpacity, FlatList, Image} from 'react-native';
import styles from './pop-over-menu.style';
import {Text} from '../text';

const PopOverMenuModal = ({
  open,
  onPress,
  selectedFilter,
  onClose,
  items,
  icon = true,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={() => null}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <FlatList
            style={styles.flatListView}
            data={items}
            keyExtractor={item => item.label}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => onPress?.(item)}>
                <View style={styles.itemView}>
                  <Text>{item.label}</Text>
                  {icon &&
                    item.value === selectedFilter?.value &&
                    item.label === selectedFilter?.label && (
                      <Image
                        source={require('../../assets/icons/success.png')}
                        style={styles.icon}
                      />
                    )}
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          />
          <View style={styles.closeButtonContainer}>
            <TouchableOpacity onPress={onClose} style={styles.cancelBtn}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {PopOverMenuModal};

import React from 'react';
import {Text} from '../../components/text';
import styles from './category_item.style';
import {TouchableOpacity, Image} from 'react-native';

const CategoryItem = ({onPress, name, image}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={
          name === 'Shoes'
            ? require('../../assets/categories/sneakers.png')
            : name === 'Computer and Laptops'
            ? require('../../assets/categories/computer.png')
            : name === 'Mobiles'
            ? require('../../assets/categories/smartphone.png')
            : name === 'Electronics'
            ? require('../../assets/categories/electronics.png')
            : name === 'Clothes'
            ? require('../../assets/categories/clothes.png')
            : name === 'Beauty and Fashion'
            ? require('../../assets/categories/beauty.png')
            : null
        }
        style={{width: 30, height: 30}}
      />
      <Text style={styles.buttonText}>{name}</Text>
    </TouchableOpacity>
  );
};

export {CategoryItem};

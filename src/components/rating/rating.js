import React from 'react';
import styles from './rating.style';
import {View, Image} from 'react-native';

const Rating = ({rating}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={
            rating >= 1
              ? require('../../assets/icons/star.png')
              : rating >= 0.5
              ? require('../../assets/icons/half_star.png')
              : require('../../assets/icons/disable_star.png')
          }
        />
      </View>
      <View>
        <Image
          style={styles.image}
          source={
            rating >= 2
              ? require('../../assets/icons/star.png')
              : rating >= 1.5
              ? require('../../assets/icons/half_star.png')
              : require('../../assets/icons/disable_star.png')
          }
        />
      </View>
      <View>
        <Image
          style={styles.image}
          source={
            rating >= 3
              ? require('../../assets/icons/star.png')
              : rating >= 2.5
              ? require('../../assets/icons/half_star.png')
              : require('../../assets/icons/disable_star.png')
          }
        />
      </View>
      <View>
        <Image
          style={styles.image}
          source={
            rating >= 4
              ? require('../../assets/icons/star.png')
              : rating >= 3.5
              ? require('../../assets/icons/half_star.png')
              : require('../../assets/icons/disable_star.png')
          }
        />
      </View>
      <View>
        <Image
          style={styles.image}
          source={
            rating >= 5
              ? require('../../assets/icons/star.png')
              : rating >= 4.5
              ? require('../../assets/icons/half_star.png')
              : require('../../assets/icons/disable_star.png')
          }
        />
      </View>
    </View>
  );
};

export {Rating};

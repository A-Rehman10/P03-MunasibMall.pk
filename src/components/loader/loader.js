import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {COLOR} from '../../config/color';
import styles from './loader.style';

const Loader: React.FC = () => {
  return (
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator
          animating={true}
          color={COLOR.PRIMARYBLUE}
          size="large"
        />
      </View>
    </View>
  );
};

export {Loader};

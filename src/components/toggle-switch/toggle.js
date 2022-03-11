import React from 'react';
import {View, Switch} from 'react-native';
import styles from './toggle-switch.style';
import {Text} from '../../components/text';

const ToggleSwitch = ({isEnabled, onSwitch}) => {
  return (
    <View style={styles.option}>
      <View style={styles.optionTextContainer}>
        <Text>Fingerprint / Face Id</Text>
      </View>
      <View style={styles.optionIconContainer}>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};
export {ToggleSwitch};

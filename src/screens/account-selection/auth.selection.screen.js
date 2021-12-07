import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {Text} from '../../components/text';
import styles from './auth.selection.style';
import {SCREENS} from '../../constants/screens';
import {PrimaryButton, BorderButton} from '../../components/buttons';

const AuthSelection = ({navigation}) => {
  const navigateToSignUp = () => {
    navigation.navigate(SCREENS.SIGN_UP);
  };
  const navigateToLogin = () => {
    navigation.navigate(SCREENS.LOGIN);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.circleContainer}>
        <Text style={styles.logo}>Munasib Mall</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton title="Sign Up" onPress={navigateToSignUp} />
        <View style={styles.buttonSeparator} />
        <BorderButton title="Login" onPress={navigateToLogin} />
      </View>
    </SafeAreaView>
  );
};

export default AuthSelection;

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import styles from './signup.style';
import {SCREENS} from '../../constants/screens';
import {PrimaryButton, BorderButton} from '../../components/buttons';

const SignUp = ({navigation}) => {
  const navigateToBuyer = () => {
    navigation.navigate(SCREENS.BUYER_SIGNUP);
  };
  const navigateToMerchant = () => {
    navigation.navigate(SCREENS.MERCHANT_SIGNUP);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttonContainer}>
        <PrimaryButton title="Buyer" onPress={navigateToBuyer} />
        <View style={styles.buttonSeparator} />
        <BorderButton title="Merchant" onPress={navigateToMerchant} />
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

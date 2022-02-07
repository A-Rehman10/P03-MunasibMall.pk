import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {Text} from '../../../components/text';
import styles from './profile.style';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/auth.action';
import {SCREENS} from '../../../constants/screens';
import {ToggleSwitch} from '../../../components/toggle-switch';
import {enableTouchId} from '../../../redux/actions/settings.action';
import TouchID from 'react-native-touch-id';

// eslint-disable-next-line no-shadow
const BuyerProfile = ({
  navigation,
  user,
  // eslint-disable-next-line no-shadow
  logout,
  // eslint-disable-next-line no-shadow
  enableTouchId,
  isTouchIdEnabled,
}) => {
  const [isTouchIdSupported, setTouchIdSuppoorted] = useState(true);

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: false, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
  useEffect(() => {
    checkSupportedDevice();
  });

  const checkSupportedDevice = () => {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        if (biometryType === 'FaceID') {
          console.log('FaceId is supported');
        } else {
          console.log('TouchId is supported');
        }
      })
      .catch(error => {
        // User's device does not support Touch ID (or Face ID)
        // This case is also triggered if users have not enabled Touch ID on their device
        setTouchIdSuppoorted(false);
      });
  };

  const navigateToChangePassword = () => {
    navigation.navigate(SCREENS.CHANGE_PASSWORD);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        // contentContainerStyle={{ }}
      >
        <View style={styles.profile}>
          <View style={styles.imageContainer}>
            <View
              style={[styles.profileImage, styles.imagePlaceholderContainer]}>
              <Image
                source={{
                  uri: user.profile_image,
                }}
                style={styles.profileImage}
              />
            </View>
          </View>
          <View style={styles.profileEdit}>
            <Text style={styles.profileName}>{user.name}</Text>
          </View>
        </View>
        <OptionSeparator />
        <Option title="Chnage Password" onPress={navigateToChangePassword} />
        <OptionSeparator />
        <Option title="Logout" onPress={logout} showIcon={false} />
        <OptionSeparator />

        <OptionSeparator />
        {isTouchIdSupported && (
          <ToggleSwitch isEnabled={isTouchIdEnabled} onSwitch={enableTouchId} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const Option = ({onPress, title, showIcon = true}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.option}>
      <View style={styles.optionTextContainer}>
        <Text>{title}</Text>
      </View>
      {showIcon && (
        <View style={styles.optionIconContainer}>
          {/* Replace with icon */}
          <Image
            source={require('../../../assets/images/chevron.png')}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{height: 15}}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const OptionSeparator: React.FC = () => <View style={styles.optionSeparator} />;

BuyerProfile.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
  isTouchIdEnabled: PropTypes.bool,
  enableTouchId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isLogging: state.auth.loading,
  user: state.auth.user,
  isTouchIdEnabled: state.settings.isTouchIdEnabled,
});

export default connect(mapStateToProps, {logout, enableTouchId})(BuyerProfile);

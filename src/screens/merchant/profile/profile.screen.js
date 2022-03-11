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
import {SCREENS} from '../../../constants/screens';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/auth.action';
import {ToggleSwitch} from '../../../components/toggle-switch';
import {enableTouchId} from '../../../redux/actions/settings.action';
import TouchID from 'react-native-touch-id';

// eslint-disable-next-line no-shadow
const MerchantProfile = ({
  navigation,
  user,
  // eslint-disable-next-line no-shadow
  logout,
  // eslint-disable-next-line no-shadow
  enableTouchId,
  isTouchIdEnabled,
}) => {
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

        <ToggleSwitch isEnabled={isTouchIdEnabled} onSwitch={enableTouchId} />
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

MerchantProfile.propTypes = {
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

export default connect(mapStateToProps, {logout, enableTouchId})(
  MerchantProfile,
);

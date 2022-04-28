/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect} from 'react';
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
import {enableTouchId} from '../../../redux/actions/settings.action';
import {PrimaryButton} from '../../../components/buttons';

const BuyerProfile = ({
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
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <TouchableOpacity style={{paddingRight: 20}}>
  //         <Image source={require('../../../assets/icons/bell.png')} />
  //       </TouchableOpacity>
  //     ),
  //   });
  // }, [navigation]);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
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
          <Text style={styles.profileName}>{user.name}</Text>
        </View>
        <OptionSeparator />
        <Option
          title="Account Details"
          imageSource={require('../../../assets/icons/user.png')}
          onPress={() => navigation.navigate(SCREENS.ACCOUNT_DETAILS)}
        />
        <OptionSeparator />
        <Option
          title="Order History"
          imageSource={require('../../../assets/icons/order.png')}
          onPress={() => navigation.navigate(SCREENS.BUYER_ORDER_HISTORY)}
        />
        <OptionSeparator />
        <Option
          title="Change Password"
          imageSource={require('../../../assets/icons/lock.png')}
          onPress={navigateToChangePassword}
        />
        <OptionSeparator />

        <Option
          title="Settings"
          imageSource={require('../../../assets/icons/settings.png')}
          onPress={() => navigation.navigate(SCREENS.SETTINGS)}
        />
        <OptionSeparator />

        <Option
          title="Contact us"
          imageSource={require('../../../assets/icons/call.png')}
          onPress={() => navigation.navigate(SCREENS.CONTACT_US)}
        />
        <OptionSeparator />

        {/* <ToggleSwitch isEnabled={isTouchIdEnabled} onSwitch={enableTouchId} /> */}
      </ScrollView>
      <View style={styles.logoutBtnContainer}>
        <PrimaryButton title="Logout" onPress={logout} />
      </View>
    </SafeAreaView>
  );
};

const Option = ({onPress, title, showIcon = true, imageSource}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.option}>
      <View style={styles.optionContainer}>
        <View style={styles.optionIconContainer}>
          {/* Replace with icon */}
          <Image source={imageSource} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{title}</Text>
        </View>
      </View>
      {showIcon && (
        <View style={styles.optionIconContainer}>
          {/* Replace with icon */}
          <Image
            source={require('../../../assets/images/chevron.png')}
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

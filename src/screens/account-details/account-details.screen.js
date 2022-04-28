import React from 'react';
import {View, SafeAreaView, Image, ScrollView} from 'react-native';
import {Text} from '../../components/text';
import styles from './account-details.style';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/auth.action';
import {enableTouchId} from '../../redux/actions/settings.action';
import moment from 'moment';

const AccountDetailsScreen = ({
  navigation,
  user,
  // eslint-disable-next-line no-shadow
  logout,
  // eslint-disable-next-line no-shadow
  enableTouchId,
  isTouchIdEnabled,
}) => {
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
          <Text style={styles.profileName}>{user.name}</Text>
        </View>
        <OptionSeparator />
        <Option
          title={user.email}
          imageSource={require('../../assets/icons/email.png')}
        />
        <OptionSeparator />
        <Option
          title={user.phone_number}
          imageSource={require('../../assets/icons/call.png')}
        />
        <OptionSeparator />
        <Option
          title={`Account Type (${' ' + user.role + ' '})`}
          imageSource={require('../../assets/icons/account.png')}
        />
        <OptionSeparator />
        <OptionSeparator />

        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>
            Your account has been registered {moment(user.created_at).fromNow()}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Option = ({title, imageSource}) => {
  return (
    <View style={styles.option}>
      <View style={styles.optionContainer}>
        <View style={styles.optionIconContainer}>
          {/* Replace with icon */}
          <Image source={imageSource} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{title}</Text>
        </View>
      </View>
    </View>
  );
};

const OptionSeparator: React.FC = () => <View style={styles.optionSeparator} />;

AccountDetailsScreen.propTypes = {
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
  AccountDetailsScreen,
);

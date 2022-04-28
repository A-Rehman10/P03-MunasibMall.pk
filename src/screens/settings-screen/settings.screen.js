/* eslint-disable no-shadow */
import React from 'react';
import {View, SafeAreaView, Image, ScrollView, Switch} from 'react-native';
import {Text} from '../../components/text';
import styles from './settings.style';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/auth.action';
import {enableTouchId} from '../../redux/actions/settings.action';
import {COLOR} from '../../config/color';

const SettingsScreen = ({enableTouchId, isTouchIdEnabled}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1}}
        // contentContainerStyle={{ }}
      >
        <OptionSeparator />
        <Option
          title="Fingerprint / Face Id"
          imageSource={require('../../assets/icons/fingerprint.png')}
          onSwitch={enableTouchId}
          isEnabled={isTouchIdEnabled}
        />
        <OptionSeparator />
      </ScrollView>
    </SafeAreaView>
  );
};

const Option = ({title, showIcon = true, imageSource, isEnabled, onSwitch}) => {
  return (
    <View o style={styles.option}>
      <View style={styles.optionContainer}>
        <View style={styles.optionIconContainer}>
          <Image source={imageSource} />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{title}</Text>
        </View>
      </View>
      {showIcon && (
        <View style={styles.optionIconContainer}>
          <Switch
            trackColor={{false: COLOR.GREY[800], true: COLOR.BLUE_GREY}}
            thumbColor={isEnabled ? COLOR.ORANGE : COLOR.WHITE}
            ios_backgroundColor={COLOR.TRANSPARENT}
            onValueChange={onSwitch}
            value={isEnabled}
          />
        </View>
      )}
    </View>
  );
};

const OptionSeparator: React.FC = () => <View style={styles.optionSeparator} />;

SettingsScreen.propTypes = {
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
  SettingsScreen,
);

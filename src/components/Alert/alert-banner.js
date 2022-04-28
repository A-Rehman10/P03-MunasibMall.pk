import React from 'react';
import {Text} from '../text';
import {View} from 'react-native';
import styles from './alert-banner.style';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const AlertCmp = ({alerts}) => {
  return (
    <View style={styles.container}>
      {alerts.map(alert => {
        return (
          <View
            key={alert.id}
            style={
              alert.color === 'red'
                ? styles.contentRedContainer
                : styles.contentGreenContainer
            }>
            <Text
              style={alert.color === 'red' ? styles.textRed : styles.textGreen}>
              {alert.msg}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

AlertCmp.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    alerts: state.alert,
  };
};

export default connect(mapStateToProps)(AlertCmp);

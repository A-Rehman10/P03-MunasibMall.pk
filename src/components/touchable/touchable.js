import React, {Component} from 'react';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

class Touchable extends Component {
  render() {
    const {children, isNative} = this.props;

    if (isNative && Platform.OS === 'android') {
      return (
        <TouchableNativeFeedback {...this.props}>
          {children}
        </TouchableNativeFeedback>
      );
    }

    return (
      <TouchableOpacity activeOpacity={0.8} {...this.props}>
        {children}
      </TouchableOpacity>
    );
  }
}

export {Touchable};

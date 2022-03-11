import React, {Component} from 'react';
import {StyleSheet, Text as NativeText, TextProps} from 'react-native';
import {FontHelper} from '../../helpers';

class Text extends Component<TextProps> {
  render(): JSX.Element {
    const {style, children, ...rest} = this.props;
    const propsStyle = FontHelper.font(StyleSheet.flatten(style || {}));
    const defaultStyle = {color: 'black'};
    const styles = StyleSheet.create({
      text: {
        ...defaultStyle,
        ...propsStyle,
      },
    });

    return (
      <NativeText {...rest} style={styles.text}>
        {children}
      </NativeText>
    );
  }
}

export {Text};

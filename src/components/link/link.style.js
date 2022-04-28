import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

const styles = StyleSheet.create({
  link: {
    fontSize: 14,
    fontWeight: '700',
  },
  primary: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.PRIMARY,
  },
  danger: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.WARNING,
  },
  destructive: {
    fontSize: 14,
    fontWeight: '700',
    color: COLOR.RED.TOMATO,
  },
});

export default styles;

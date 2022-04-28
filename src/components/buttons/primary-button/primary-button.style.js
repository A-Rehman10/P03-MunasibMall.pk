import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.ORANGE,
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: COLOR.WHITE,
  },
  disabled: {
    opacity: 0.5,
  },
});

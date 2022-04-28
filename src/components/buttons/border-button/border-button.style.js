import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 30,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOR.ORANGE,
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: COLOR.ORANGE,
  },
  disabled: {
    opacity: 0.5,
  },
});

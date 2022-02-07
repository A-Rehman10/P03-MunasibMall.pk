import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOR.RED[200],
    borderWidth: 2,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '500',
    color: COLOR.RED[200],
  },
  disabled: {
    opacity: 0.5,
  },
});

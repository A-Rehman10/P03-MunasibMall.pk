import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';

export default StyleSheet.create({
  container: {
    height: 24,
    minWidth: 80,
    borderRadius: 4,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 500,
    color: COLOR.BLUE[500],
  },
  disabled: {
    opacity: 0.5,
    color: COLOR.BLUE[500],
    fontSize: 16,
    fontWeight: 500,
  },
});

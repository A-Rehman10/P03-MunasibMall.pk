import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  disabled: {
    opacity: 0.5,
  },
});

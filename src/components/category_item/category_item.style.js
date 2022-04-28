import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.GREY[100],
    borderRadius: 8,
    height: 100,
    paddingTop: 20,
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLOR.BLUE_GREY,
    marginTop: 5,
  },
  disabled: {
    opacity: 0.5,
  },
});

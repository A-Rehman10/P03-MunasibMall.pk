import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

export default StyleSheet.create({
  container: {
    elevation: 3,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: '#000000',
    shadowRadius: 2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: COLOR.WHITE,
    borderWidth: 0.5,
    borderColor: COLOR.GREY.MUTED,

    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 700,
    color: COLOR.BLUE_GREY,
  },
  disabled: {
    opacity: 0.5,
  },
});

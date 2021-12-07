import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: COLOR.GREY,
    zIndex: 1000,
  },
  activityIndicatorWrapper: {
    backgroundColor: COLOR.WHITE,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

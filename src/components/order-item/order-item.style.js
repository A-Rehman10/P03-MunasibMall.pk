import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

export default StyleSheet.create({
  container: {
    elevation: 3,
    borderRadius: 10,
    shadowOpacity: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000000',
    paddingVertical: 30,
    paddingHorizontal: 15,
    shadowRadius: 2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: COLOR.WHITE,
    borderWidth: 0.5,
    borderColor: COLOR.GREY.MUTED,
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: COLOR.GREY.DARK,
    alignSelf: 'center',
  },
});

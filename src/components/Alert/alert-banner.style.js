import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';
import {FONT_SIZE} from '../../constants/ui';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 40,
  },
  contentRedContainer: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: COLOR.RED.TOMATO,
    backgroundColor: COLOR.RED[100],
    marginBottom: 15,
  },
  contentGreenContainer: {
    paddingHorizontal: 25,
    paddingVertical: 5,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'green',
    backgroundColor: '#e1fcca',
    marginBottom: 15,
  },
  textRed: {
    fontSize: FONT_SIZE.SM,
    color: COLOR.RED.TOMATO,
    alignSelf: 'center',
    padding: 5,
    marginTop: 6,
  },
  textGreen: {
    fontSize: FONT_SIZE.SM,
    color: COLOR.BLACK_BLUE,
    alignSelf: 'center',
    padding: 5,
    marginTop: 6,
  },
});

import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 8,
    paddingHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  inputText: {
    height: 56,
    color: COLOR.BLACK_BLUE,
  },
  hasError: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLOR.WARNING,
    paddingHorizontal: 20,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 3,
  },
});
export default styles;

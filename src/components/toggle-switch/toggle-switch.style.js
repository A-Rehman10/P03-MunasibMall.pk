import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    backgroundColor: COLOR.GREY[200],
    padding: 10,
    borderRadius: 8,
  },
  optionTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  optionIconContainer: {
    justifyContent: 'center',
  },
});

export default styles;

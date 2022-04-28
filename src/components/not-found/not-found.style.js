import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';
import {FONT_SIZE} from '../../constants/ui';

const styles = StyleSheet.create({
  notFound: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  notFoundText: {
    color: COLOR.WARNING,
    fontSize: FONT_SIZE.LG,
    fontWeight: 700,
  },
});

export default styles;

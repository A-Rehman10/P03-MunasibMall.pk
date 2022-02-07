import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';
import {FONT_SIZE} from '../../constants/ui';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLOR.GREY[150],
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    offset: {
      width: 0,
      height: 3,
    },
    shadowCshadowolor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  iconContainer: {
    marginRight: 8,
  },
  iconPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: COLOR.GREY[700],
    backgroundColor: COLOR.GREY[100],
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
    justifyContent: 'center',
  },
  textPrimary: {
    fontSize: FONT_SIZE.LG,
    fontWeight: '400',
    color: COLOR.GREY.DARK,
  },
  textSecondary: {
    fontSize: 8,
    fontWeight: '400',
    color: COLOR.GREY.DARK,
    marginTop: 4,
  },
  buttonContainer: {
    justifyContent: 'center',
  },
});

export default styles;

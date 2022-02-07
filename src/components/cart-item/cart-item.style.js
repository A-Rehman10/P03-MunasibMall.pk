import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';
import {FONT_SIZE} from '../../constants/ui';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLOR.GREY[150],
    backgroundColor: COLOR.WHITE,
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
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
    paddingTop: 30,
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
  btn: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
  },
  btnContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  incrementContainer: {
    flexDirection: 'row',
    padding: 10,
  },
  textqty: {
    fontSize: FONT_SIZE.LG,
    fontWeight: '400',
    color: COLOR.PRIMARY,
    marginTop: 8,
  },
  textPrice: {
    fontSize: FONT_SIZE.LG,
    fontWeight: '400',
    color: COLOR.GREY.DARK,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
});

export default styles;

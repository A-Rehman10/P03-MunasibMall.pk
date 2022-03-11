import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 8,
    minHeight: 56,
    borderWidth: 0,
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
  hasError: {
    backgroundColor: COLOR.WHITE,
    borderRadius: 8,
    minHeight: 56,
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
  disabled: {
    opacity: 0.4,
  },
  disabledOverlay: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: COLOR.TRANSPARENT,
    // paddingLeft: 12,
    // paddingRight: 16.96,
  },
  flexContainer: {
    flex: 1,
  },
  placeholder: {
    fontSize: 13,
    color: COLOR.BLUE_GREY,
    fontWeight: 'bold',
  },
  placeholderSmall: {
    marginBottom: 2,
  },
  placeholderLarge: {
    fontSize: 13,
    paddingHorizontal: 14,
  },
  placeholderTextColor: {
    color: COLOR.BLUE_GREY,
  },
  required: {
    borderColor: COLOR.RED,
  },
  value: {
    fontSize: 15,
    color: COLOR.BLUE_GREY,
  },
});

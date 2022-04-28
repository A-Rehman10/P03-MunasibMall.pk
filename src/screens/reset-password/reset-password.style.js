import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  userEmailContainer: {
    paddingHorizontal: 5,
    paddingBottom: 30,
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  resendBtnContainer: {
    // paddingHorizontal: 10,
  },
  resendBtnText: {
    color: COLOR.PRIMARY,
    fontWeight: 700,
    paddingHorizontal: 5,
  },
});

export default styles;

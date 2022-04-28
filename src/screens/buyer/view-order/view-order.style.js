import {ScaledSheet} from 'react-native-size-matters';
import {COLOR} from '../../../config/color';

const styles = ScaledSheet.create({
  container: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: COLOR.WHITE,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  orderBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 40,
    alignItems: 'center',
    alignContent: 'center',
  },
  orderBtn: {
    paddingHorizontal: 20,
    backgroundColor: COLOR.ORANGE,
    paddingVertical: 10,
    borderRadius: 15,
  },
  orderBtnText: {
    color: COLOR.WHITE,
    fontWeight: 1000,
  },

  sliderContainer: {height: 200, margin: 10},
  contentContainer: {
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 5,
  },
  list: {
    flex: 1,
  },
  itemSeperator: {
    height: 8,
  },
  listContentContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
});
export default styles;

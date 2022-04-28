import {ScaledSheet} from 'react-native-size-matters';
import {COLOR} from '../../config/color';
import {FONT_SIZE} from '../../constants/ui';

const styles = ScaledSheet.create({
  container: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: COLOR.WHITE,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  sliderContainer: {height: 200, margin: 10},
  storeContainer: {
    paddingHorizontal: 30,
    marginTop: 10,
  },
  storeHeader: {
    fontSize: FONT_SIZE.XL,
    color: COLOR.GREY.DARK,
    fontWeight: 700,
  },
  categoriesContent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
    paddingTop: 20,
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom: 10,
  },
});
export default styles;

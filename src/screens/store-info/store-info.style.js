import {ScaledSheet} from 'react-native-size-matters';
import {COLOR} from '../../config/color';
import {FONT_SIZE} from '../../constants/ui';

const styles = ScaledSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  container: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: COLOR.WHITE,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  image: {width: 390, height: 250},
  descriptionContainer: {
    justifyContent: 'center',
    paddingVertical: 15,
  },
  description: {
    textAlign: 'justify',
    color: COLOR.GREY[800],
    fontSize: FONT_SIZE.BASE,
  },
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

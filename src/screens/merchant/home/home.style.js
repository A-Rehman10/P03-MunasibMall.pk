import {ScaledSheet} from 'react-native-size-matters';
import {COLOR} from '../../../config/color';
import {FONT_SIZE} from '../../../constants/ui';

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
  welcomeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  welcome: {
    fontSize: FONT_SIZE['2XL'],
    color: COLOR.YELLOW,
    fontWeight: 700,
  },
  name: {
    fontSize: FONT_SIZE['2XL'],
    color: COLOR.BLUE[400],
    paddingHorizontal: 15,
    fontWeight: 700,
  },
  btn: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: COLOR.ORANGE,
    borderRadius: 10,
    marginBottom: 30,
  },
  btnText: {
    color: COLOR.WHITE,
    fontWeight: 700,
    fontSize: FONT_SIZE.LG,
    alignSelf: 'center',
  },
});
export default styles;

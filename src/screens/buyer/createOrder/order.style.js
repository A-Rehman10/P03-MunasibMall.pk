import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';
import {FONT_SIZE} from '../../../constants/ui';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 10,
  },
  safeArea: {
    flex: 1,
  },
  shippingContainer: {
    paddingHorizontal: 20,
  },
  title: {
    color: COLOR.BLUE_GREY,
    fontSize: FONT_SIZE.LG,
    textAlign: 'center',
    marginVertical: 20,
  },
  addressInputContainer: {
    paddingVertical: 40,
  },
  total: {
    padding: 20,
    backgroundColor: COLOR.BLUE_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 10,
  },
  shippingPriceContainer: {
    paddingHorizontal: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  shippingPrice: {
    alignItems: 'center',
    marginVertical: 30,
    paddingVertical: 20,
    borderRadius: 8,
    backgroundColor: COLOR.WARNING,
  },
  price: {
    fontSize: FONT_SIZE.XL,
    color: COLOR.WHITE,
  },
});
export default styles;

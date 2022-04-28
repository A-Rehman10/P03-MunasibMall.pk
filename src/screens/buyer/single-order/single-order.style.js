import {ScaledSheet} from 'react-native-size-matters';
import {COLOR} from '../../../config/color';
import {FONT_SIZE} from '../../../constants/ui';

const styles = ScaledSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 20,
  },
  container: {
    // marginTop: 20,
    flex: 1,
    backgroundColor: COLOR.WHITE,
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
  },
  priceContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingTop: 30,
  },
  actualContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  priceText: {
    color: COLOR.GREY.DARK,
    fontSize: FONT_SIZE.LG,
    fontWeight: 700,
  },
  modalContainer: {
    height: 350,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowRadius: 4,
    padding: 10,
  },
  reviewFormContainer: {
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000066',
  },
});
export default styles;

import {Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {COLOR} from '../../config/color';
import {FONT_SIZE} from '../../constants/ui';
const width = Dimensions.get('window').width / 2 - 30;

// 230 / 168
export default ScaledSheet.create({
  container: {
    elevation: 3,
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: '#000000',
    shadowRadius: 2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    backgroundColor: COLOR.WHITE,
    borderWidth: 0.5,
    borderColor: COLOR.GREY.MUTED,
  },
  card: {
    height: 250,
    backgroundColor: COLOR.WHITE,
    width: width,
    marginHorizontal: 2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
  },
  marginRight: {
    marginRight: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.BASE,
    marginTop: 10,
    color: COLOR.GREY[800],
  },
  price: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.SM,
    marginTop: 10,
    color: COLOR.GREY[800],
  },
  actualPrice: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.SM,
    marginTop: 10,
    color: COLOR.GREY[800],
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  addToCart: {
    backgroundColor: COLOR.WHITE,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 3,
    marginBottom: 3,
    shadowOpacity: 0.3,
    shadowColor: '#000000',
    shadowRadius: 2,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    borderColor: COLOR.GREY.MUTED,
  },
  btnContainer: {
    alignItems: 'flex-end',
    alignSelf: 'center',
    flexDirection: 'row',
    paddingTop: 15,
  },
});

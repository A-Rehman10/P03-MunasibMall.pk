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
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {width: 190, height: 300},
  descriptionContainer: {
    justifyContent: 'center',
  },
  description: {
    textAlign: 'justify',
    color: COLOR.GREY[800],
    fontSize: FONT_SIZE.BASE,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  ratingText: {
    color: COLOR.YELLOW,
    fontSize: FONT_SIZE['2XL'],
    fontWeight: 700,
  },
  reviewHeaderContainer: {
    flexDirection: 'row',
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  reviewHeader: {
    fontSize: FONT_SIZE.XL,
    color: COLOR.GREY.DARK,
    fontWeight: 700,
  },
  writeReviewBtn: {
    borderBottomWidth: 1,
    borderBottomColor: COLOR.ORANGE,
  },
  writeReview: {
    fontSize: FONT_SIZE.BASE,
    color: COLOR.ORANGE,
    fontWeight: 700,
  },
  reviewContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    borderBottomColor: COLOR.GREY[200],
    borderBottomWidth: 1,
  },
  reviewRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: FONT_SIZE.BASE,
    color: COLOR.GREY.DARK,
    fontWeight: 700,
    marginTop: 10,
  },
  commentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  commentText: {fontSize: FONT_SIZE.SM, color: COLOR.GREY[800]},
  cartContainer: {
    paddingHorizontal: 50,
    paddingTop: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: COLOR.GREY[100],
    borderRadius: 10,
    marginBottom: 10,
  },
  cartBtn: {
    paddingHorizontal: 40,
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  actualPrice: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE.LG,
    color: COLOR.GREY[800],
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  discount_price: {
    fontWeight: 700,
    fontSize: FONT_SIZE.XL,
    color: COLOR.ORANGE,
  },
  reviewFormContainer: {
    paddingHorizontal: 50,
  },
});
export default styles;

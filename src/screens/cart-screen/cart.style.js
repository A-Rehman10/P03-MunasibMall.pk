import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';
import {FONT_SIZE} from '../../constants/ui';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 10,
  },
  safeArea: {
    flex: 1,
  },
  header: {
    paddingTop: 36,
    paddingBottom: 20,
    flexDirection: 'row',
  },
  headerButtonContainer: {
    width: 80,
    paddingHorizontal: 16,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 17,
    fontWeight: '700',
    color: COLOR.BLACK_BLUE,
  },
  headerButtonText: {
    fontSize: 17,
    fontWeight: '700',
    color: COLOR.BLUE[500],
  },
  contentContainer: {
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 5,
  },
  spaceBelowSearchBar: {
    height: 5,
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
  total: {
    paddingHorizontal: 40,
    paddingTop: 10,
    backgroundColor: COLOR.WHITE,
    marginBottom: 10,
  },
  price: {
    fontSize: FONT_SIZE.LG,
    color: COLOR.BLUE_GREY,
    textAlign: 'center',
  },
  checkoutButtonContainer: {
    paddingHorizontal: 10,
    marginBottom: 25,
    borderRadius: 10,
  },
  checkoutButton: {
    paddingHorizontal: 40,
    marginBottom: 25,
    borderRadius: 10,
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';
// import { FONT_SIZE } from "@constants";

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
});
export default styles;

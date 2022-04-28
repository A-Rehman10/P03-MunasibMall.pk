import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';
// import { FONT_SIZE } from "@constants";

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    // paddingHorizontal: 10,
  },
  safeArea: {
    flex: 1,
    borderColor: 'pink',
  },
  container: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  idContainer: {
    width: 90,
    backgroundColor: COLOR.WHITE,
    // paddingHorizontal: 5,
  },
  isPaidContainer: {
    width: 90,
    backgroundColor: COLOR.WHITE,
  },
  statusContainer: {
    width: 90,
    backgroundColor: COLOR.WHITE,
  },
  createdAtContainer: {
    width: 90,
    backgroundColor: COLOR.WHITE,
  },
  updateContainer: {
    width: 100,
    backgroundColor: COLOR.WHITE,
  },
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

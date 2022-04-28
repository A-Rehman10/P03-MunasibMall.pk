import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';
import {FONT_SIZE} from '../../../constants/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  profile: {
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  editIcon: {
    alignSelf: 'flex-end',
    marginTop: 4,
  },

  option: {
    flexDirection: 'row',
    backgroundColor: COLOR.WHITE,
    padding: 20,
    borderRadius: 8,
    justifyContent: 'space-between',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'space-between',
  },
  optionText: {
    fontSize: FONT_SIZE.LG,
    textAlign: 'justify',
    paddingHorizontal: 20,
  },
  optionIconContainer: {
    justifyContent: 'center',
    // alignItems: 'center',
  },
  optionSeparator: {
    height: 5,
    backgroundColor: COLOR.WHITE,
  },
  profileEdit: {
    // flexDirection: "row",
    // justifyContent: "space-around",
  },
  imageContainer: {
    alignItems: 'center',
    backgroundColor: COLOR.GREY,
    borderRadius: 70,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 0.1,
  },
  imagePlaceholderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderIcon: {
    color: COLOR.WHITE,
  },
  logoutBtnContainer: {
    paddingHorizontal: 40,
    marginVertical: 20,
  },
});

export default styles;

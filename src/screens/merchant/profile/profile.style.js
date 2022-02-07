import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: 30,
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
    backgroundColor: COLOR.GREY[200],
    padding: 16,
    borderRadius: 8,
  },
  optionTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  optionIconContainer: {
    justifyContent: 'center',
  },
  optionSeparator: {
    height: 20,
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
});

export default styles;

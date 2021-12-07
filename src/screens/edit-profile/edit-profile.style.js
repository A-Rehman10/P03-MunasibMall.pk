import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: COLOR.PRIMARYBLUE,
    marginBottom: 40,
  },
  overlay: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.WHITE,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 32,
    borderRadius: 70,
  },
  imageEditContainer: {
    position: 'absolute',
    bottom: 2,
    right: 0,
    padding: 5,
    borderWidth: 0.2,
    borderRadius: 60,
    backgroundColor: COLOR.GREY1,
  },
  selectedImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 0.1,
  },
  imagePlaceholderContainer: {
    // backgroundColor: COLOR.GREY[100],
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderIcon: {
    color: COLOR.WHITE,
  },
});

export default styles;

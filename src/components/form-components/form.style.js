import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';
const styles = StyleSheet.create({
  btnStyle: {
    width: '80%',
    backgroundColor: COLOR.WARNING,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  inputView: {
    width: '80%',
    backgroundColor: COLOR.WHITE,
    borderRadius: 8,
    height: 10,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 25,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: '#000000',
    shadowRadius: 5,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  btnText: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
  },
});
export default styles;

import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLOR.WHITE,
  },
  circleContainer: {
    alignItems: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: COLOR.WARNING,
    marginBottom: 20,
  },
  buttonContainer: {
    paddingHorizontal: 50,
  },
  buttonSeparator: {
    height: 20,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: COLOR.WARNING,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    left: 40,
  },
  signUpBtn: {
    width: '80%',
    backgroundColor: COLOR.WHITE,
    borderRadius: 8,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    position: 'relative',
    left: 40,
    borderColor: COLOR.WARNING,
    borderWidth: 1,
  },
  loginText: {
    color: COLOR.WHITE,
    fontWeight: 'bold',
  },
  signUpText: {
    color: COLOR.WARNING,
    fontWeight: 'bold',
  },
});

export default styles;

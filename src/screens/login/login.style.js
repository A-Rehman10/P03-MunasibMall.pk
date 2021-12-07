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
    fontSize: 50,
    color: COLOR.WARNING,
    marginBottom: 40,
    alignSelf: 'center',
  },
  signUpText: {
    fontWeight: 'bold',
    color: COLOR.BLUE[500],
    alignSelf: 'center',
    fontSize: 15,
  },
  forgot: {
    color: COLOR.BLUE[500],
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;

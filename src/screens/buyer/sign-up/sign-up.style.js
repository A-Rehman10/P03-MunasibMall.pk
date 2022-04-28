import {StyleSheet} from 'react-native';
import {COLOR} from '../../../config/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
    // justifyContent: 'center',
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: 'center',
  },
  login: {
    color: COLOR.BLUE[500],
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default styles;

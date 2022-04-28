import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000066',
  },
  modalContainer: {
    height: 350,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowRadius: 4,
    padding: 10,
  },
  flatListView: {flex: 1},
  itemView: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {width: 24, height: 24},
  itemSeparator: {height: 1, backgroundColor: '#00000066'},
  closeButtonContainer: {alignSelf: 'center', paddingBottom: 15},
  cancelBtn: {
    backgroundColor: COLOR.ORANGE,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 50,
  },
  cancelBtnText: {
    color: COLOR.WHITE,
  },
});

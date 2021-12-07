import {StyleSheet} from 'react-native';
import {COLOR} from '../../config/color';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  modalTopSpace: {
    flex: 1,
  },
  actionBarContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    shadowRadius: 4,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowOffset: {
      height: -2,
      width: 0,
    },
  },
  actionBarSpace: {
    flex: 1,
  },
  iosPicker: {
    height: 200,
    backgroundColor: COLOR.WHITE,
  },
  androidModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    padding: 30,
  },
  androidModalContentContainer: {
    backgroundColor: 'white',
    padding: 16,
  },
  androidPickerTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  androidPickerOptionText: {
    fontSize: 16,
    flex: 1,
  },
  pickerOptionContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  buttonsContainer: {
    paddingRight: 30,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonSpace: {
    width: 30,
  },
});

export default styles;

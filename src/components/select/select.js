import React, {useState, useEffect} from 'react';
import {
  Modal,
  View,
  Platform,
  Text,
  ActivityIndicator,
  Image,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Link} from '../../components/link';
import {TouchableField} from '../../components/touchable-field';
import {OS} from '../../constants/application';
import styles from './select.style';
import {RadioButtonInput} from 'react-native-simple-radio-button';
import {COLOR} from '../../config/color';

const Select = props => {
  const {disabled, isLoading, options = [], placeholder, hasError} = props;
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  function onDonePress() {
    setVisible(false);

    if (Platform.OS === 'ios' && !value) {
      props.onDonePress && props.onDonePress(options[0]?.value);
    } else {
      props.onDonePress && props.onDonePress(value);
    }
  }

  function onCancelPress() {
    setVisible(false);
    setValue(props.value);
    props.onCancelPress && props.onCancelPress(value);
  }

  return (
    <View>
      {props.isLoading ? (
        <ActivityIndicator color="#1886DF" />
      ) : (
        <TouchableField
          placeholder={placeholder}
          value={value}
          disabled={disabled || isLoading}
          onPress={() => setVisible(true)}
          hasError={hasError}
          icon={
            <Image
              source={require('../../assets/icons/down-chevron.png')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{height: 20, width: 20}}
            />
          }
        />
      )}
      {Platform.OS === OS.IOS ? (
        <Modal style={styles.modalContainer} transparent visible={visible}>
          <View style={styles.modalTopSpace} />

          <View style={styles.actionBarContainer}>
            <Link primary text={'Cancel'} onPress={onCancelPress} />

            <View style={styles.actionBarSpace} />

            <Link primary text={'Done'} onPress={onDonePress} />
          </View>

          <Picker
            selectedValue={value}
            style={styles.iosPicker}
            onValueChange={val => setValue(val)}>
            {options.map(option => (
              <Picker.Item
                label={option.name}
                value={option.name}
                key={option._id}
              />
            ))}
          </Picker>
        </Modal>
      ) : (
        <Modal
          style={styles.androidModalContainer}
          transparent
          visible={visible}>
          <View style={styles.androidModalContainer}>
            <View style={styles.androidModalContentContainer}>
              <Text style={styles.androidPickerTitle}>{placeholder}</Text>

              {props.options.map(option => (
                <View key={option._id} style={styles.pickerOptionContainer}>
                  <Text style={styles.androidPickerOptionText}>
                    {option.name}
                  </Text>

                  <RadioButtonInput
                    index={0}
                    obj={option}
                    buttonSize={15}
                    isSelected={option.name === value}
                    onPress={() => setValue(option.name)}
                    buttonInnerColor={COLOR.ORANGE}
                    buttonOuterColor={COLOR.ORANGE}
                  />
                </View>
              ))}

              <View style={styles.buttonsContainer}>
                <Link primary={false} text={'CANCEL'} onPress={onCancelPress} />
                <View style={styles.buttonSpace} />
                <Link primary text={'DONE'} onPress={onDonePress} />
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

export {Select};

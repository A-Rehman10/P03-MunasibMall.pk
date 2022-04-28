import React from 'react';
import {View} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import {styles} from './search-bar.style';

const SearchbarCustom = ({
  onChangeText,
  onSearchPress,
  spinnerVisibility,
  placeholder,
  handleOnClearPress,
}) => {
  return (
    <View style={styles.inputContainer}>
      <SearchBar
        placeholder={placeholder}
        // onPress={() => console.log("hellso")}
        onChangeText={onChangeText}
        onSearchPress={onSearchPress}
        spinnerVisibility={spinnerVisibility}
        onClearPress={handleOnClearPress}
        style={styles.search}
      />
    </View>
  );
};
export {SearchbarCustom};

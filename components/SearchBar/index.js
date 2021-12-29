import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';

const SearchBar = (props) => {
  
  const onSearch = (text) => {
    console.warn(text);
  };

  return(
    <View style={styles.searchWrap}>
      <View style={styles.searchButton}>
        <Image 
          source={require('../../assets/search_b.png')}
          style={styles.searchImage}
          resizeMode= {'cover'}
        />
      </View>
      
      <TextInput 
      style={styles.searchInput}
      placeholder='Enter city or zipcode'
      placeholderTextColor={'rgba(40, 40, 40, 1)'}
      returnKeyType={'search'}
      onSubmitEditing={(event) => (onSearch(event.nativeEvent.text))} />
      
    </View>
  );
}

export default SearchBar;
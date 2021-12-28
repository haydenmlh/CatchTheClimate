import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';

const SearchBar = (props) => {
  return(
    <View style={styles.searchWrap}>
      <TextInput 
      style={styles.searchInput}
      placeholder='Enter city or zipcode'
      placeholderTextColor={'rgba(40, 40, 40, 1)'} />
      <TouchableOpacity style={styles.searchButton}>
        <Image 
          source={require('../../assets/search_b.png')} 
          style={styles.searchImage}
          resizeMode= {'cover'}
        />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar;
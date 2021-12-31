import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';
import onSearch from './onSearch';

const SearchBar = (props) => {
  
  const sendWeatherData = props.sendWeatherData;
  const cityFromSearch = props.cityFromSearch


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
      onSubmitEditing={(event) => (onSearch(event.nativeEvent.text, sendWeatherData))} 
      onChangeText={(event) => (cityFromSearch(event))} />
      
    </View>
  );
}

export default SearchBar;
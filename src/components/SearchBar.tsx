import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import onSearch from '../api/onSearch';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";

const SearchBar = (props) => {
  
  const sendWeatherData = props.sendWeatherData;
  const cityFromSearch = props.cityFromSearch;


  return(
    <View style={styles.searchWrap}>
      <View style={styles.searchButton}>
        <Image 
          source={require('../assets/search_b.png')}
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

const styles = StyleSheet.create({
  searchWrap: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    height: 50,   
  },
  searchInput: {
    flex: 3,
    color: 'black',
    height: 30,
    margin: 12,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 40,
    borderRadius: 3,
    padding: 0,
    paddingLeft: 15,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  }, 
  searchButton: {
    height: 30,
    width: 30,
    borderRadius: 3,
    marginTop: 10,
    marginRight: -10,
    marginLeft: 40,
    // backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  searchImage: {
    width: undefined,
    height: '60%',
    margin: '20%',
    marginRight: '0%',
    marginLeft: '20%',
    aspectRatio: 1,
  }
})

export default SearchBar;
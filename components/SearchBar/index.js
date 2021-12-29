import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image, Dimensions} from 'react-native';
import styles from './styles';
import {API_KEY} from '@env';

const SearchBar = (props) => {
  
  const onSearch = (text) => {
    console.warn(cityOrZipcode(text));
    let callCity = 'api.openweathermap.org/data/2.5/weather?q='
                +text
                +'&appid='
                + API_KEY;
    let callZip = 'api.openweathermap.org/data/2.5/weather?zip='
                  +text
                  +'&appid='
                  + API_KEY;
    cityOrZipcode(text) ? callZip : callCity;
  };

  const callCity = (text) => {
    let callCity = 'api.openweathermap.org/data/2.5/weather?q='
                +text
                +'&appid='
                + API_KEY;
  }

  const cityOrZipcode = (text) => {
    let re = /\d+/;
    return re.test(text);
  }

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
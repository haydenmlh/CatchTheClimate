import React, { useState } from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import SearchBar from '../SearchBar';
import Background from '../Background';
import LogoTitle from '../LogoTitle';
import WeatherCity from '../WeatherCity';

function CityScreen() {
  const [data, setData] = useState('');

  const searchToCityScreen = (childData) => {
    setData(childData);
  }

  return(
    <View style={styles.outerBox}>
      <Background />
      
      <ScrollView>
        <LogoTitle />
        <SearchBar searchToCityScreen={searchToCityScreen} />
        <WeatherCity info={data} unit={'C'} />
      </ScrollView>
    </View>
  );
}

export default CityScreen;
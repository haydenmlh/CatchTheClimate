import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import SearchBar from '../SearchBar';
import Background from '../Background';
import LogoTitle from '../LogoTitle';
import WeatherCity from '../WeatherCity';

const CityScreen = (props) => {
  return(
    <View style={styles.outerBox}>
      <Background />
      
      <View style={styles.header}>
        <LogoTitle />
        <SearchBar />
        <WeatherCity city='tokyo' />
      </View>
    </View>
  );
}

export default CityScreen;
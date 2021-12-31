import React, { useState } from 'react';
import {View, Text, ScrollView, RefreshControl} from 'react-native';
import styles from './styles';
import SearchBar from '../SearchBar';
import Background from '../Background';
import LogoTitle from '../LogoTitle';
import WeatherCity from '../WeatherCity';
import onSearch from '../SearchBar/onSearch';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function CityScreen() {
  const [weatherData, setWeatherData] = useState('');
  const [curCity, setCurCity] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);


  const onRefresh = async() => {
    setRefreshing(true);
    console.log('Now Searching '+curCity);
    onSearch(curCity, sendWeatherData);
    wait(1000).then(() => setRefreshing(false));
  }

  const sendWeatherData = (childData) => {
    setWeatherData(childData);
  }

  const cityFromSearch = (childData) => {
    setCurCity(childData);
    console.log(curCity);
  }

  return(
    <View style={styles.outerBox}>
      <Background />
      
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <LogoTitle />
        <SearchBar sendWeatherData={sendWeatherData} cityFromSearch={cityFromSearch} />
        <WeatherCity info={weatherData} unit={'C'} />
      </ScrollView>
    </View>
  );
}

export default CityScreen;
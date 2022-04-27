import React, { useState } from 'react';
import {View, Text, ScrollView, RefreshControl, StyleSheet, Dimensions} from 'react-native';
import SearchBar from '../components/SearchBar';
import Background from '../components/Background';
import LogoTitle from '../components/LogoTitle';
import CurAndSevenWeather from '../components/CurAndSevenWeather';
import onSearch from '../api/onSearch';
import { useStorage } from '../utils/useStorage';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function CityScreen() {
  const [weatherData, setWeatherData] = useState('');
  const [curCity, setCurCity] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  const [apiKey, setApiKey]: [any, (value: unknown) => void] = useStorage("apikey", "");


  const onRefresh = async() => {
    setRefreshing(true);
    console.log('Now Searching '+curCity);
    onSearch(curCity, sendWeatherData, apiKey);
    wait(1000).then(() => setRefreshing(false));
  }

  const sendWeatherData = (childData) => {
    console.log("Weather Data");
    console.log(childData);
    setWeatherData(childData);
  }

  // const cityFromSearch = (childData) => {
  //   setCurCity(childData);
  //   console.log(curCity);
  // }

  return(
    <View style={styles.outerBox}>
      <Background />
      
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }>
        <LogoTitle />
        <SearchBar 
          sendWeatherData={sendWeatherData} 
          setCurCity={setCurCity} 
          apiKey={apiKey}
          />
        <CurAndSevenWeather info={weatherData} unit={'C'} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({ 
  header: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  outerBox: {
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: 'black',
  }
})


export default CityScreen;
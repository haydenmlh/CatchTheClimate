import React, { useState } from 'react';
import { View, ScrollView, RefreshControl, StyleSheet, Dimensions, Settings } from 'react-native';


import SearchBar from '../components/SearchBar';
import Background from '../components/Background';
import LogoTitle from '../components/LogoTitle';
import CurAndSevenWeather from '../components/CurAndSevenWeather';

import onSearch from '../api/onSearch';
import { useStorage } from '../utils/useStorage';

const wait = (timeout: number) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function CityScreen({ navigation }) {
  const [weatherData, setWeatherData] = useStorage("weatherData", "");
  const [refreshing, setRefreshing] = React.useState(false);
  const [curCity, setCurCity]: [any, (value: unknown) => void] = useStorage("city", "");
  const [apiKey, setApiKey]: [any, (value: unknown) => void] = useStorage("apiKey", "");


  const onRefresh = async() => {
    setRefreshing(true);
    console.log('Now Searching '+curCity);
    onSearch(curCity, setWeatherData, apiKey);
    wait(1000).then(() => setRefreshing(false));
  }


  // if (!weatherData) { // if weatherData is empty
  //   // Execute on search on default city then return
  //   console.log('Now Searching '+"Toronto");
  //   onSearch("Toronto", setWeatherData, apiKey);
  //   wait(1000).then(() => setRefreshing(false));
  // }

  return(
    <View style={styles.outerBox}>
      <Background />
      
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }>
        <LogoTitle nav={navigation} />
        <SearchBar setWeatherData={setWeatherData}
          city={[curCity, setCurCity]}
          apiKey = {apiKey} />
        <CurAndSevenWeather weatherData={weatherData} unit={'C'} />
        
      </ScrollView>
      
    </View>
  );

  
}


const styles = StyleSheet.create({ 
  outerBox: {
    position: 'relative',
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: 'black',
  },
})


export default CityScreen;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import CurWeather from './CurAndSevenWeatherComponents/CurWeather';
import SevenDayOverall from './CurAndSevenWeatherComponents/SevenDayOverall';
import { useStorage } from '../utils/useStorage';
import mapsIndex from 'react-native-mmkv-storage/dist/src/indexer/maps';

const CurAndSevenWeather = (props) => {
  const unit = props.unit;

  let weatherData;
  try{
    weatherData = new Map(JSON.parse(props.weatherData));
  } catch (e) {
    // console.log(weatherData);
    // console.log(e);
    weatherData = new Map();
  }

  for (let i = 1; i <= 7; i++) {
    let curDay = 'day'+i.toString();
    let data = weatherData.get(curDay);
    let newmp = new Map(JSON.parse(data));
    weatherData.set(curDay, newmp);
  };
  

  console.log(weatherData);

  let status: string;
  try{
    status = weatherData.get("status");
  } catch {
    status = "";
  }

  if (status == "success") { // Successful Search
    return(
      <View style={[styles.wrap, styles.Success]}>
        <CurWeather info={weatherData} unit={unit} />
        <SevenDayOverall info={weatherData} unit={unit}/>
      </View>
    )
  } else {
    return(
      <View style={[styles.wrap, styles.Unknown]}>
        <Text style={[styles.text, styles.city]}> 
          {status}
        </Text>
      </View>
    )
  }
  
}

const styles = StyleSheet.create({ 
  wrap: {
    alignItems: 'center',
  },
  NoRes: {
    height: 200,
  },
  NoCity: {
    height: 200,
  },
  Success: {
    height: 750,
  },
  Unknown: {
    height: 200,
  },
  text: {
    color: 'white',
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  city: {
    fontSize: 20,
    marginTop: 5,
  },
})

export default CurAndSevenWeather;
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CurWeather from './CurAndSevenWeatherComponents/CurWeather';
import SevenDayOverall from './CurAndSevenWeatherComponents/SevenDayOverall';

const CurAndSevenWeather = (props) => {
  const info = props.info;
  const unit = props.unit;
  let status:string;
  try{
    status = info.get("status");
  } catch {
    status = "";
  }

  if (status == "success") { // Successful Search
    return(
      <View style={[styles.wrap, styles.Success]}>
        <CurWeather info={info} unit={unit} />
        <SevenDayOverall info={info} unit={unit}/>
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
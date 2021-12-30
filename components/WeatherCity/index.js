import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import convertKelvin from './utils/convertKelvin';
import convertDegreetoCompass from './utils/convertDegreeToCompass';
import CurWeather from './CurWeather';
import SevenDayWeather from './SevenDayWeather';

const WeatherCity = (props) => {
  const info = props.info;
  const unit = props.unit;
  

  if (typeof(info) == 'string') { // No Search yet
    return(
      <View style={[styles.wrap, styles.NoRes]}>
        <Text style={[styles.text, styles.city]}> No Result Yet </Text>
      </View>
    )
  } else if (info == 0) { // No City Found
    return(
      <View style={[styles.wrap, styles.NoCity]}>
        <Text style={[styles.text]}> No City/Zipcode found. </Text>
      </View>
    )
  } else if (typeof(info) == 'object') { // Successful Search
    return(
      <View style={[styles.wrap, styles.Success]}>
        <CurWeather info={info} unit={unit} />
        <SevenDayWeather info={info} unit={unit}/>
      </View>
    )
  } else {
    return(
      <View style={[styles.wrap, styles.Unknown]}>
        <Text style={[styles.text, styles.city]}> 
          Unknown Error. Please search again. 
        </Text>
      </View>
    )
  }
  
}

export default WeatherCity;
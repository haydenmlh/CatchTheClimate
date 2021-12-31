import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import convertKelvin from '../utils/convertKelvin';
import convertDegreetoCompass from '../utils/convertDegreeToCompass';

const CurWeather = (props) => {
  const info = props.info;
  const unit = props.unit;
  
  const cur_icon_uri = 'http://openweathermap.org/img/wn/'
  +info.get('icon')
  +'@4x.png';

  return (
    <>
    <Text style={[styles.text, styles.city]}> {info.get('city')} </Text>
    <View style={[styles.row, styles.currentWrap]}>
      <View style={[styles.column, styles.weatherIconNameWrap]}>
        <Image style={styles.weatherIcon} 
        source={{uri: cur_icon_uri}}
        />
        <Text style={[styles.text, styles.weatherStatus]}>{info.get('weather')}</Text>
      </View>
      <View style={[styles.column, styles.infoWrap]}>
        <View style={[styles.row, styles.tempWrap]}>
          <Text style={[styles.text, styles.tempCur]}>{convertKelvin(info.get('tempCur'), unit)}°{unit}</Text>
          <View style={[styles.column]}>
            <Text style={[styles.text, styles.tempMax]}>High: {convertKelvin(info.get('tempMax'), unit)}°{unit}</Text>
            <Text style={[styles.text, styles.tempMin]}>Low: {convertKelvin(info.get('tempMin'), unit)}°{unit}</Text>
          </View>
        </View>
        <View style={[styles.row, styles.windWrap]}>
          <Text style={[styles.text, styles.tempMin]}>Wind: {info.get('windSpeed')} km/h </Text>
          <Text style={[styles.text, styles.tempMin]}>{convertDegreetoCompass(info.get('windDeg'))} </Text>
        </View>
        <Text style={[styles.text]}>Humidity: {info.get('humidity')}%</Text>
        <Text style={[styles.text]}>Precipitation: {info.get('rain')} mm</Text>
      </View>
    </View>
    </>
  )
}

export default CurWeather;
import React from 'react';
import {View, Text, Image} from 'react-native';
import convertKelvin from '../../utils/convertKelvin';
import convertDegreetoCompass from '../../utils/convertDegreeToCompass';
import {StyleSheet} from 'react-native';

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
        <View style={[styles.row]}>
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

const styles = StyleSheet.create({ 
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
      fontWeight: '500',
    },
    currentWrap: {
      // backgroundColor: 'red',
      marginRight: 20,
    },
    weatherIconNameWrap: {
      // backgroundColor: 'lime',
      width: 120,
      alignItems: 'flex-end',
      justifyContent: 'center',
      marginRight: 10,
    },
    weatherIcon: {
      width: 100,
      height: undefined,
      aspectRatio: 1,
      margin: -8,
    },
    weatherStatus: {
      textTransform: 'capitalize',
    },
    infoWrap: {
      // backgroundColor: 'red',
      width: '40%',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      marginLeft: 10,
    },
    tempWrap: {
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    tempCur: {
      fontSize: 30,
      paddingRight: 10,
    },
    tempMin: {
  
    },
    tempMax: {
      
    },
})
  


export default CurWeather;
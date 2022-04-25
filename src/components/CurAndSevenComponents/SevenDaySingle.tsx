import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import convertKelvin from '../../utils/convertKelvin';
import convertDegreetoCompass from '../../utils/convertDegreeToCompass';
import convertDt from '../../utils/convertDt';

const SevenDaySingle = (props) => {
  const info = props.info;
  const unit = props.unit;

  const cur_icon_uri = 'http://openweathermap.org/img/wn/'
  +info.get('icon')
  +'@4x.png';

  return (
    <View style={styles.sevenDaySingleWrap}>
      <Text style={[styles.text, styles.sevenDayDate]}>{convertDt(info.get('dt'), 'dmd')}</Text>
      <View style={[styles.row, styles.sevenDayInfoWrap]}>
        <View style={[styles.column, styles.weatherIconNameWrap]}>
          <Image style={styles.weatherIcon} 
          source={{uri: cur_icon_uri}}
          />
          <Text style={[styles.text, styles.weatherStatus]}>{info.get('weather')}</Text>
        </View>
        <View style={[styles.row, styles.textWrap]}>
          <View style={[styles.column, styles.tempCol]}>
            <View style={[styles.row, styles.tempWrap]}>
              <Text style={[styles.text, styles.tempCur]}>{convertKelvin(info.get('tempDay'), unit)}°{unit}</Text>
              <View style={[styles.column]}>
                <Text style={[styles.text, styles.tempMax]}>High: {convertKelvin(info.get('tempMax'), unit)}°{unit}</Text>
                <Text style={[styles.text, styles.tempMin]}>Low: {convertKelvin(info.get('tempMin'), unit)}°{unit}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.column, styles.windHumPrecCol]}>
            <View style={[styles.row]}>
              <Text style={[styles.text, styles.tempMin]}>Wind: {info.get('windSpeed')} km/h </Text>
              <Text style={[styles.text, styles.tempMin]}>{convertDegreetoCompass(info.get('windDeg'))} </Text>
            </View>
            <Text style={[styles.text]}>Humidity: {info.get('humidity')}%</Text>
            <Text style={[styles.text]}>Precipitation: {info.get('rain')} mm</Text>
          </View>
        </View>
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 10,
  },
  column: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  }, 
  sevenDaySingleWrap: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  sevenDayDate: {
  },
  sevenDayInfoWrap: {
    // backgroundColor: 'green',
    height: 50,
  },
  weatherIconNameWrap: {
    // backgroundColor: 'lime',
    width: 75,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  weatherIcon: {
    width: 60,
    height: undefined,
    aspectRatio: 1,
    margin: -15,
  },
  weatherStatus: {
    textTransform: 'capitalize',
  },
  textWrap: {
    // backgroundColor: 'red',
    width: '60%',
  },
  tempCol:{ 
    // backgroundColor: 'pink',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tempWrap: {
  },
  tempCur: {
    fontSize: 18,
    paddingRight: 8,
  },
  tempMin: {

  },
  tempMax: {
    
  },
  windHumPrecCol: {
    width: '50%',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
})




export default SevenDaySingle;
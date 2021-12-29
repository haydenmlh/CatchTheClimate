import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const WeatherCity = (props) => {
  const city = props.city;
  // console.warn(city);

  return(
    <View styles={styles.wrap}>
      <Text styles={styles.name}></Text>
      <Image styles={styles.weatherIcon} />
      <Text styles={styles.weatherStatus}></Text>
    </View>
  )
}

export default WeatherCity;
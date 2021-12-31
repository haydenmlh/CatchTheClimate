import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import SevenDaySingle from './SevenDaySingle';

const SevenDayWeather = (props) => {
  const info = props.info;
  const unit = props.unit;
  

  return (
    <View style={[styles.column, styles.wrap]}>
      <Text style={[styles.text, styles.sevenDay]}>7 Day Forecast</Text>
      <SevenDaySingle info={info.get('day1')} unit={unit} />
      <SevenDaySingle info={info.get('day2')} unit={unit} />
      <SevenDaySingle info={info.get('day3')} unit={unit} />
      <SevenDaySingle info={info.get('day4')} unit={unit} />
      <SevenDaySingle info={info.get('day5')} unit={unit} />
      <SevenDaySingle info={info.get('day6')} unit={unit} />
      <SevenDaySingle info={info.get('day7')} unit={unit} />
    </View>
  )
}

export default SevenDayWeather;
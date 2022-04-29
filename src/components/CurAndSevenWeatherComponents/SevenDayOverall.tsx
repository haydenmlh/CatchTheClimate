import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SevenDaySingle from './SevenDaySingle';

const SevenDayOverall = (props) => {
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

const styles = StyleSheet.create({ 
  wrap: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
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
  sevenDay: {
    marginTop: 20,
    fontWeight: '500',
  },
})

export default SevenDayOverall;
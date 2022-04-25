import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const LogoTitle = () => {
  const icon = require('../assets/icon.png');

  return(
    <View style={styles.logoWrap}>
      <Image 
      source={icon} 
      style={styles.logoImage}
      resizeMode={'cover'}
      />
      <Text style={[styles.TitleText]}>
        WeatherMan
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({ 
  logoWrap: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    height: 35,
    marginTop: 15,
    marginBottom: 10,
  },
  TitleText: {
    color: 'white',
    textAlignVertical: 'center',
  },
  logoImage: {
    width: undefined,
    height: '100%',
    aspectRatio: 1,
  }
})

export default LogoTitle;
import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';

const LogoTitle = (props) => {
  const icon = require('../../assets/icon.png');

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

export default LogoTitle;
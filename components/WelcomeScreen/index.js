import React from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';
import SearchBar from '../SearchBar';

const WelcomeScreen = (props) => {
  const img = require('../../assets/splashbg.jpg');
  const icon = require('../../assets/icon.png');

  return(
    <View style={styles.welcomeContainer}>
      <ImageBackground source={img} style={styles.bgimage} />
      <View style={styles.welcomeBlock}>
        <Image source={icon}></Image>
          <Text style={[styles.welcomeText,styles.welcomeTitle]}>
            WeatherMan
          </Text>
          <Text style={[styles.welcomeText, styles.welcomeSubtitle]}>
            Your friendly weather assistant
          </Text>
      </View>
      <View style={styles.spacerBlock}></View>
      <View style={styles.searchBlock}>
        <SearchBar />
      </View>
    </View>
  );
}

export default WelcomeScreen;
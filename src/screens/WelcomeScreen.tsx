import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
import ApiKeyBar from '../components/ApiKeyBar';
import Background from '../components/Background';

const WelcomeScreen = () => {
  const icon = require('../assets/icon.png');
  
  return(
    <View style={styles.welcomeContainer}>
      <Background />
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
        <ApiKeyBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    width: '100%',
    height: '100%',
  },
  bgimage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  },
  welcomeBlock: {
    flex: 7,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    // textShadowColor: 'rgba(0, 0, 0, 0.2)',
    // textShadowOffset: {width: 3, height: 2},
    // textShadowRadius: 1,
  },
  welcomeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  spacerBlock: {
      flex: 1,
  },
  welcomeSubtitle: {
    fontSize: 16,
  },
  searchBlock: {
    flex: 5,
  }
})

export default WelcomeScreen;
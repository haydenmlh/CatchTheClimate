import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import ApiKeyWelcome from '../components/ApiKeyWelcome';
import Background from '../components/Background';

const WelcomeScreen = ({ navigation }) => {
  const icon = require('../assets/icon.png');
  
  const successNav = () => {
    navigation.navigate("CityDisplay");
    navigation.reset({index: 0, routes: [{name: "CityDisplay"}]});
  }
  
  return(
    <View style={styles.welcomeContainer}>
      <Background />
      <View style={styles.welcomeBlock}>
        <Image source={icon}></Image>
          <Text style={[styles.welcomeText,styles.welcomeTitle]}>
            CatchTheClimate
          </Text>
          <Text style={[styles.welcomeText, styles.welcomeSubtitle]}>
            Your friendly weather assistant
          </Text>
      </View>
      <View style={styles.spacerBlock}></View>
      <View style={styles.searchBlock}>
        <ApiKeyWelcome 
          successNav = {successNav}
        />
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
    flex: 6,
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
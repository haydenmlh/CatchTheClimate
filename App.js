import React, { useState } from 'react';
import { Text, View, Button, ImageBackground, Image, StyleSheet } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';
import CityScreen from './components/CityScreen';


export default function App () {
  // console.log('hello');
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen /> */}
      <CityScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
})
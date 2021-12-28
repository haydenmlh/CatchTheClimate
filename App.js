import React, { useState } from 'react';
import { Text, View, Button, ImageBackground, Image, StyleSheet } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen';


export default function App () {
  // console.log('hello');
  return (
    <View style={styles.container}>
      <WelcomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
import React from 'react';
import {ImageBackground, Dimensions, StyleSheet} from 'react-native';

const Background = () => {
  const img = require('../assets/splashbg2.jpg');

  return(
    <ImageBackground source={img} style={styles.bgimage} />
  );
}

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
  bgimage: {
    width: screen.width,
    height: screen.height,
    position: 'absolute',
  },
})

export default Background;
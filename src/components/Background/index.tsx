import React from 'react';
import {View, Text, ImageBackground, Dimensions} from 'react-native';

const Background = (props) => {
  const img = require('../../assets/splashbg2.jpg');

  return(
    <ImageBackground source={img} style={styles.bgimage} />
  );
}

import {StyleSheet} from 'react-native';
const screen = Dimensions.get("screen");


const styles = StyleSheet.create({
  bgimage: {
    width: screen.width,
    height: screen.height,
    position: 'absolute',
  },
})

export default Background;
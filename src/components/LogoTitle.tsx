import React from 'react';
import {View, Text, Image, Pressable, Dimensions, StyleSheet} from 'react-native';

const LogoTitle = (props) => {
  const icon = require('../assets/icon.png');
  const nav = props.nav;


  return(
    <View style={styles.logoWrap}>
      <Image 
      source={icon} 
      style={styles.logoImage}
      resizeMode={'cover'}
      />
      <Text style={[styles.TitleText]}>
        CatchTheClimate
      </Text>
      <SettingsButton nav={nav} />
    </View>
  );
}

const SettingsButton = (props) => {
  let nav = props.nav;
  return(
    <Pressable onPressOut = {() => {nav.navigate("Settings")}}>
      <Image
        style={styles.SettingsButton}
        source={require('../assets/settings_w.png')}/>
    </Pressable>
    );
}


const screen = Dimensions.get("screen");

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
  },
  SettingsButton: {
    position: 'absolute',
    height: 25,
    width: 25,
    marginLeft: 80,
    marginTop: 5,
  },
})

export default LogoTitle;
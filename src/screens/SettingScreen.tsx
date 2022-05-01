import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import { useStorage } from '../utils/useStorage';

import Background from '../components/Background';
import ApiKeyBar from '../components/ApiKeyBar';
import { WeatherApiLink } from '../components/ApiKeyWelcome';

const SettingScreen = ({ navigation }) => {

  const successNav = () => {
    navigation.navigate("CityDisplay");
  }

  return(
    <View>
      <Background />
      
      <View style={[styles.HeaderBox]}>
        <Text style={[styles.HeaderText]}>Settings</Text>
      </View>
      
      <View style={[styles.FlexHorizontal]}>
        <Text style={[styles.ApiInstructions]}>
          API Key from 
        </Text>
        <WeatherApiLink />
      </View>

      <ApiKeyBar
        successNav = {successNav}
      />

      {/* <View style={[styles.FlexHorizontal, styles.UnitView]}>
        <Text style={[styles.ApiInstructions]}>Units</Text>
      </View> */}


      <View style={[styles.BackButton]}>
        <Button 
          title = "Back"
          onPress = {successNav}
        />
      </View>
    </View>
  )
};



const styles = StyleSheet.create({
  BackButton: {
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
  },
  HeaderBox: {
    marginTop: 20,
    marginBottom: 40,
  },
  HeaderText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '700',
  },
  Bold: {
    fontWeight: '700',
  },
  ApiInstructions: {
    color: 'white',
  },
  Margins: {
    color: 'white',
    marginTop: 15,
  }, 
  FlexCenterVertical: {
    flexDirection: 'row',
    alignItems: 'center',    
  },
  FlexHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'white',
    // borderWidth: 2,
  },
  UnitView: {
    marginTop: 25,
  },
});

export default SettingScreen;
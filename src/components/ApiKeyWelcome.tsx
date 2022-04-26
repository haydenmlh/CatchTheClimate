import React from 'react';
import {View, Text, StyleSheet, Linking, TouchableHighlight} from 'react-native';
import ApiKeyBar from './ApiKeyBar';

const ApiKeyWelcome = () => {

  const WeatherApiLink = () => {
    var [ isPress, setIsPress ] = React.useState(false);

    var touchProps = {
      activeOpacity: 1,
      underlayColor: '#d6d1ff',                               // <-- "backgroundColor" will be always overwritten by "underlayColor"
      style: isPress ? styles.LinkPress : styles.LinkNormal, // <-- but you can still apply other style changes
      onHideUnderlay: () => setIsPress(false),
      onShowUnderlay: () => setIsPress(true),
      onPress: () => Linking.openURL('https://openweathermap.org/'), 
    };

    return(
      

      <View>
      <TouchableHighlight {...touchProps}>
      <Text style={styles.LinkText} onPress={() => Linking.openURL('https://openweathermap.org/')}>
          https://openweathermap.org/
        </Text>
      </TouchableHighlight>
      </View>
    );
  }

  return(
    <View style={styles.ApiWrap}>
      <View style={styles.Center}>
        <View style={styles.InstructionsWrap}>
          <Text style={styles.InstructionsTextFirstRow}>
            To begin, click on
          </Text>
          <WeatherApiLink />
        </View>
        <Text style={styles.InstructionsTextSecondRow}>
          Register an account to receive an API key
        </Text>
      </View>
      
      <ApiKeyBar />
      
      
    </View>
  );
}


const styles = StyleSheet.create({
  ApiWrap: {
    // backgroundColor: 'red',
    flexDirection: 'column',
    height: 200,
  },
  InstructionsWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  InstructionsTextFirstRow: {
    color: 'white',
  },
  InstructionsTextSecondRow: {
    color: 'white',
  },
  LinkNormal: {
    backgroundColor: '#edebff',
    marginLeft: 5,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  LinkPress: {
    backgroundColor: '#d6d1ff',
    marginLeft: 5,
    padding: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
  },
  LinkText: {
    color: 'black',
  },
  Center: {
    alignItems: 'center'
  }
})

export default ApiKeyWelcome;

